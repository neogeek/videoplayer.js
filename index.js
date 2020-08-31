const createDeviceOption = (device, select) => {
    const option = document.createElement('option');

    option.setAttribute('value', device.deviceId);

    option.appendChild(document.createTextNode(device.label));

    select.appendChild(option);
};

const setDeviceId = (key, value) => {
    localStorage.setItem(`${key}DeviceId`, value);
};

const getDeviceId = key => {
    return localStorage.getItem(`${key}DeviceId`);
};

const setVideoPlayerObject = video => {
    const videoInputDeviceId = getDeviceId('videoInput');
    const audioInputDeviceId = getDeviceId('audioInput');

    return navigator.mediaDevices
        .getUserMedia({
            video: videoInputDeviceId ? { deviceId: videoInputDeviceId } : true,
            audio: audioInputDeviceId ? { deviceId: audioInputDeviceId } : true
        })
        .then(stream => {
            video.srcObject = stream;

            return stream;
        });
};

const setupVideoPlayer = (video, options = {}) => {
    const devices = navigator.mediaDevices.enumerateDevices();

    if (options.videoInputDeviceSelect) {
        devices
            .then(devices =>
                devices.filter(({ kind }) => kind === 'videoinput')
            )
            .then(devices =>
                devices.map(device =>
                    createDeviceOption(device, options.videoInputDeviceSelect)
                )
            );
        options.videoInputDeviceSelect.addEventListener(
            'change',
            ({ target: { value } }) => {
                setDeviceId('videoInput', value);

                setVideoPlayerObject(video);
            }
        );
    }

    if (options.audioInputDeviceSelect) {
        devices
            .then(devices =>
                devices.filter(({ kind }) => kind === 'audioinput')
            )
            .then(devices =>
                devices.map(device =>
                    createDeviceOption(device, options.audioInputDeviceSelect)
                )
            );
        options.videoInputDeviceSelect.addEventListener(
            'change',
            ({ target: { value } }) => {
                setDeviceId('audioInput', value);

                setVideoPlayerObject(video);
            }
        );
    }

    return setVideoPlayerObject(video);
};
export { setVideoPlayerObject, setupVideoPlayer };
