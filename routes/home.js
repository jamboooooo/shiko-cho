const { Router } = require('express');
const router = Router()
router.get('/', (req, res) => {
    res.render('home', {
        carous: [{
                link: 'http://pm1.narvii.com/7491/d360b8dbd2d7d6ddc0398d0b0b8e3c83541cdd78r1-2048-1152v2_uhq.jpg',
                klass: 'carousel-item active'
            },
            {
                link: 'https://i.pinimg.com/originals/25/39/ee/2539eea01d304d2808850afd419b4038.png',
                klass: 'carousel-item'
            },
            {
                link: 'https://i.playground.ru/i/pix/2700105/image.jpg',
                klass: 'carousel-item'
            }
        ],
        konoha: 'http://pm1.narvii.com/7491/d360b8dbd2d7d6ddc0398d0b0b8e3c83541cdd78r1-2048-1152v2_uhq.jpg',
        pesok: 'https://i.pinimg.com/originals/25/39/ee/2539eea01d304d2808850afd419b4038.png',
        oblako: 'https://i.playground.ru/i/pix/2700105/image.jpg',
        kages: [{
                route: '/konoha',
                link: 'https://getwallpapers.com/wallpaper/full/1/2/a/1373114-vertical-hokage-naruto-wallpaper-1920x2160-for-windows-7.jpg',
                text: `Узумаки Наруто — главный герой манги и аниме, 
                житель Конохи. В него запечатал Девятихвостого 
                демона-лиса Кьюби Намиказе Минато, четвертный Хокаге.`
            },
            {
                route: '/sand',
                link: "https://i.pinimg.com/originals/65/e2/5d/65e25da8a1a0b9dda0821ca00dbfb0d0.jpg",
                text: `Гаара - это человек с которым жестоко обошлась судьба, 
                        при рождении по приказу отца в его теле заточили 
                        демона-тануки Сюкаку. Поэтому к Гааре относились не как 
                        к человеку а как к ужасному оружию деревни песка, у которого нет чуств.`
            },
            {
                route: '/cloud',
                link: "https://pm1.narvii.com/7161/1cb613c31525c74780b1ba59bb9d1e1af9ba3020r1-700-611v2_hq.jpg",
                text: `Эй является четвёртым Райкаге, сыном Третьего Райкаге. 
                        Когда в его детстве в соответствии с давней традицией 
                        Эю выбирали напарника, только один ребёнок соответствовал ему по силе.`

            }
        ]
    })
})
module.exports = router