document.querySelectorAll('.button-container button').forEach(btn => {
    btn.addEventListener('click', function() {
        const target = this.getAttribute('data-target');
        const imgPath = this.getAttribute('data-img');
        openModal(target, imgPath);
    });
});

function openModal(target, imgPath) {
    const modal = document.querySelector('.modal');
    const modalText = document.querySelector('.modal-text');
    const modalImg = document.querySelector('.modal-img');

    let message = '';
    switch(target) {
        case 'letter':
            message = 'Happy 22nd birthday to the greatest, amazing, beautiful, charming, brightest, and cutest girl to ever walk this Earth. Everyday, I am truly grateful, appreciative, and honored that I get to walk alongside and be blessed by such a presence that is your soul. Each year, I am continually amazed by the person you are and the person youre becoming. At 22, youve already accomplished so much, showing strength, grace, intelligence, and a spirit that refuses to be dimmed. And yet, I know that this is just the beginning for you.Every day with you feels like unwrapping a gift. With each layer, I discover something new, something delightful, or something profound. Your laughter, your stories, the way your eyes light up when you talk about things you love these are the chapters that fill our book, and I cant wait to read and write many more with you. Birthdays are also a time to dream, so heres my wish for you, May this new chapter of your life open up to paths filled with opportunities, adventures, and cherished moments. May you always find the strength to chase after your dreams, no matter how big or small they might be. And in times of doubt or challenge, always remember that you have an entire universe of potential within you and a partner right beside you, cheering you on every step of the way.';
            break;
        case 'date':
            message = 'The day I took the courage, decided to follow my heart, and ask you on the date. Who wouldve thought that a simple yet meaningful date would end up beginning this beautiful story in our lives. I always look back and think to myself how lucky I am that you accepted and chose to come with me regardless of all of the thing everyone was saying about that me, that any person would simply hear, and turn down. But, you turned off that noise, and gave me a chance to prove myself to you. And I will forever be grateful for that.';
            break;
        case 'feb':
            message = 'Valentines Day 2022...The day I officially made you my forever girl. As cliche as it is with asking you out on Valentines Day, the timing and the moment just felt too perfect for me to pass on this. And lucky me that you said yes :)';
            break;
        case 'trip':
            message = 'Our first trip together to California! Man, this was such a fun and great trip. It will always hold dearest to my heart and will always be my favorite trip.';
            break;
        case 'gift':
            message = 'My greatest gift? The answer is simple... you.';
            break;
    }
    
    modalText.textContent = message;
    if (imgPath) {
        modalImg.src = imgPath;
        modalImg.style.display = 'block'; // Show the image only if there's a path
    } else {
        modalImg.style.display = 'none'; // Hide the image if no path
    }
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
}

