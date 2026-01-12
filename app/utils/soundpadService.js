export async function soundpadPlay(index) {
    const res = await fetch('http://127.0.0.1:3002/soundpad/playSound', {
    method: 'POST',
    body: JSON.stringify({ soundId: index }),
    headers: { 'Content-Type': 'application/json' }
    });
    return res
}

export async function soundpadStop() {
    const res = await fetch('http://127.0.0.1:3002/soundpad/stopSound', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
    });
    return res
}

export async function soundpadPause() {
    const res = await fetch('http://127.0.0.1:3002/soundpad/pauseSound', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
    });
    return res
}

export async function soundpadJump(percentage) {
    const res = await fetch('http://127.0.0.1:3002/soundpad/jump', {
    method: 'POST',
    body: JSON.stringify({ percentage }),
    headers: { 'Content-Type': 'application/json' }
    });
    return res
}

export async function soundpadSetVolume(volumeVal) {
    const res = await fetch('http://127.0.0.1:3002/soundpad/setVolume', {
    method: 'POST',
    body: JSON.stringify({ volume: volumeVal }),
    headers: { 'Content-Type': 'application/json' }
    });
    return res
}