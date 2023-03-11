const HomeController = {

    showHome: (req, res)=>{
        return res.render('home')
    },
    showProdutos: (req, res) =>{
        return res.render('produto')
    }
}

module.exports = HomeController