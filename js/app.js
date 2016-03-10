(function () {

    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });

    app.controller('TabController', function () {
        this.tab = 1;
        this.setTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSet = function (entrada) {
            return this.tab === entrada;
        };
    });
    var gems = [
        {
            name: 'NOME',
            price: 2.95,
            description: 'descricao',
            isAvaliable: true,
            canPurchase: true,
            images: []
        },
        {
            name: 'NOME2',
            price: 5.95,
            description: 'descricao 2',
            isAvaliable: true,
            canPurchase: true,
            images: [
                {
                    full: 'images/image2_01_full.jpg',
                    thumb: 'images/image3_01_thumb.jpg'
                },
                {
                    full: 'images/image2_02_full.jpg',
                    thumb: 'images/image3_02_thumb.jpg'
                },
                {
                    full: 'images/image2_03_full.jpg',
                    thumb: 'images/image3_03_thumb.jpg'
                }
            ]
        },
        {
            name: 'NOME 3',
            price: 9.95,
            description: 'descricao 3',
            isAvaliable: true,
            canPurchase: true,
            images: [
                {
                    full: 'images/image3_01_full.jpg',
                    thumb: 'images/image3_01_thumb.jpg'
                },
                {
                    full: 'images/image3_02_full.jpg',
                    thumb: 'images/image3_02_thumb.jpg'
                },
                {
                    full: 'images/image3_03_full.jpg',
                    thumb: 'images/image3_03_thumb.jpg'
                },
                {
                    full: 'images/image3_04_full.jpg',
                    thumb: 'images/image3_04_thumb.jpg'
                },
                {
                    full: 'images/image3_05_full.jpg',
                    thumb: 'images/image3_05_thumb.jpg'
                }
            ]
        }
    ]
})();