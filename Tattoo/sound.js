var sound = new Howl({
    src: ['Like A Stone [glO58_4sXWM].mp3'],
    autoplay: true,
    loop: true,
    volume: 0.2,
    onend: function() {
        console.log('Finished!');
    }
    });