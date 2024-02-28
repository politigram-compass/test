setScreen("welcomeScreen");
var num = 0;
var ans = [];
var depth = 100;
var pfps = [];
var xValue = 0;
var xPosition = 0;
var xCoord = 0;
var yValue = 0;
var yPosition = 0;
var yCoord = 0;
var zValue = 0;
var zPosition = 0;
var zCoord = 0;
var distance;
var distances = [];
var maxDistance;
var maxIndex;
var sortedDistances = [];
var usernames = ["teen.politics.official","charlemagnes_corner","seize_the_memes","batkoschizo","progressive.politico","feldsteinphilosophy","the_southern_leftist","liberty_son_76","teen.politics.official","social_liberals","max_stirner_fanpage_v2","old.right","deafpatriot","angry.americans","libertylover2","refoundingfather","anarchist.punk","broken.bones.and.civilizations","kiwimutualist","anpacball","individualist.libertarian","reactionary.movement.v5","right_wing_imperial","anarchistunity","socialista.tejana","liberallibertarian","visionary.arabia","social.dem.official","palmetto_state_bluedog","pizza.minuteman","lippie4solidarity","massachusite","lib_confederalism","soc.leftist","2038_movement","american.edgelord.v2","union.inter","proudly.we.hail","anarcho.garfieldism","anarchy.is.liberty","ancap_or_death","ancap_society","the.eco.socialist","biblicalamericanpolitics","campus_conservative_","cristero.mexico","cuban.progressive","demsocialistcolony","identityeurope","tiitoist","libertiansocialist.sf","majortomrade","marxist_luxemburgist","mexicanlibertarian","mister.american","tuckertarian","not_a_domestic_terrorist","refoundingfather","shoe0nhead","the.geopolitical.forecaster","anarquistamexicano","toronto_socialist","trotskium","wokerevolution","realisticleftist","leftistcommentary","mass_liberty","nationalist__party","new.libertarianism","missourian_ancaps","art.n.politics.v3","unorthodox.anarchist","soviet.chronicles_.v15","politicrab","leftistperspective","cyberjeetism","therightstats","immortal_leninism","american_coalition_v2","im_literally_melody","deep.fried.tyrannicide","genz.politics","kashmarxi","let_me_barter_btch","libertarian_atheist_","marxist_horizons","pennsylvania_progressive","bahamasball","unionizethehomeless","independent.american","comrade_sacha","possumtwostillpossumin","american.marxist","proletarian.flame","redneck.anarchist","thelaurenchen","puppers.against.capitalism","anarcho_bidenism_action","the.decadent.socialist2","sees.the.memes"];
/*
setImageURL("pfp0","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/67764982_1550989088385934_3968337532810166272_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=No8H0lGy0TQAX_Ug1qp&edm=AId3EpQBAAAA&ccb=7-5&oh=00_AfBYmN6bqRRAIfPz2znGT_b5cgfaKmbea7mGC9w_czsjqw&oe=64A7678E&_nc_sid=f5838a");
setImageURL("pfp2","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/15538172_560718934128695_8844726783736545280_a.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=WbNBfBEhtkkAX9LyR3k&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCWAtas0F6Yg_KYl0AFNepUn9GrzCRU4uLtmI22T5LpjA&oe=64A5E7B2&_nc_sid=ee9879");
setImageURL("pfp3","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/289149639_1647564595627327_1787364162451106836_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=MaN6dniHAzkAX_05WD3&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB2k0ilU27wo56okv7nenho3N0LLRAW_P3fQMUbmMmyqg&oe=64A5EF5F&_nc_sid=ee9879");
setImageURL("pfp4","https://instagram.fosu2-1.fna.fbcdn.net/v/t51.2885-19/133696846_1293689554327157_6782023762857236484_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ZtFD-S23e8kAX9XXfTS&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCQmjsMkbQyuJpFIj3aHvGs5EXeiu0phYMio2Z6nwVzDg&oe=64A7C74D&_nc_sid=ee9879");
setImageURL("pfp6","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/71169235_736006833528599_6719925910293708800_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=7o1skrW_xTsAX_l119d&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBC2Jx2Oeol_cIzqYBrDs7-G7MZpy4k6K78ublUky8y3w&oe=64A61616&_nc_sid=ee9879");
setImageURL("pfp7","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/50966821_426281751478412_6541253909275475968_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=dOlWQz9EMkEAX-PYny2&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCfog01ESgMB6ycNnYt4x5H2uaqP0H4yuJc0QC2fxnXXg&oe=64A7434C&_nc_sid=ee9879");
setImageURL("pfp8","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/67764982_1550989088385934_3968337532810166272_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=No8H0lGy0TQAX_Ug1qp&edm=AId3EpQBAAAA&ccb=7-5&oh=00_AfBYmN6bqRRAIfPz2znGT_b5cgfaKmbea7mGC9w_czsjqw&oe=64A7678E&_nc_sid=f5838a");
setImageURL("pfp10","https://instagram.fosu2-2.fna.fbcdn.net/v/t51.2885-19/327567242_524373912871441_6213412188450414655_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=IqNiLCQU0bwAX9Ccmm4&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDMqOYCQeCsTr6mWTvCsCGNgziD7DR8YJ-sw1ZWcImHmg&oe=64A6023D&_nc_sid=8b3546");
setImageURL("pfp11","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/131917630_2804076699840438_5991993675835799626_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=pixiq16epMEAX95LI_A&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBIjISXUaLXHbv7aChflzUIVHGv4CszbphsP4d-9ezEjA&oe=64A7A7DF&_nc_sid=ee9879");
setImageURL("pfp13","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/66187683_483716572420965_5862078576001548288_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=mBDwOO8MWLkAX9g8Zv3&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBvnNhkbJjScXGkp4ngXXDgY6C2FGbjSrBma1yQujb7dQ&oe=64A61118&_nc_sid=ee9879");
setImageURL("pfp19","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/54512288_2173306332999678_1673071705196593152_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=MNgf6FcebJkAX-l7SRG&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCeYTX4PliSDsPujOdj1fsY7z0xvBpZVLCUCpy7vD25Tw&oe=64A72BD5&_nc_sid=ee9879");
setImageURL("pfp21","https://instagram.fosu2-1.fna.fbcdn.net/v/t51.2885-19/146637592_535002860738544_7625757301378096407_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=VA_nE8iDqZcAX8rnFKj&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCniTPpqgQL7O0rVBU2vA-xDvfTTAXsg1_ZfCwCtOHX3w&oe=64A5FAE0&_nc_sid=8b3546");
setImageURL("pfp25","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/193146339_804522296734367_9097281662319431807_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=ECEgfmt2H_QAX8ZvKWz&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfADBSuyzct8xZfs3V5bX1YeyHPXmxBaIV-NEp200ORAGg&oe=64A66B47&_nc_sid=ee9879");
setImageURL("pfp28","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/29715904_165973937437194_6170829863511916544_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=-kZB6Spb7dcAX-O2Nq9&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfADHT6llOqNARch-HCotMR6EBHtzTpsLzHkaHMZz0Krqg&oe=64A6F01F&_nc_sid=ee9879");
setImageURL("pfp32","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/29738458_847003332153234_2072454623788007424_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=3XCSdRF61rcAX-tkhgE&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBGvPlhTsqWqPTVLHLIoaRIpGlJImKFfsnOBRuUnFwzIQ&oe=64A5EAF6&_nc_sid=ee9879");
setImageURL("pfp34","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/269688934_1573780832996692_3067259354442934044_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=JO21eE9UJl4AX-fq5H_&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBF3fAmJmT-IB7yaiu7nHSRyJfcrHaBhUKpPlHtPqisUA&oe=64A5EE15&_nc_sid=ee9879");
setImageURL("pfp35","https://instagram.fosu2-1.fna.fbcdn.net/v/t51.2885-19/29089242_598144640538569_3339020043924013056_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=GOuCccqeoyoAX8MvezR&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBQZmgJkaUEkgcwOuOWxqhNZNj3vPI8VVD6m7DUpEyBPg&oe=64A68960&_nc_sid=ee9879");
setImageURL("pfp37","https://instagram.fosu2-2.fna.fbcdn.net/v/t51.2885-19/137115820_242115670776553_2497784117424753818_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=UoX3dx6uvIoAX8dV823&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDAbQX9pXkuixLtdmhGDFTxTxcsQGEGcyAkJi5BFeNoCg&oe=64A703CE&_nc_sid=8b3546");
setImageURL("pfp38","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/153349522_477907336912355_4694585360310038504_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=lVI0_fX9JtQAX8kemcz&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCBLaf-OMmLM1wd8jBt4xs9YgTr9F7PEGnLzYonhlLoyQ&oe=64A624C0&_nc_sid=ee9879");
setImageURL("pfp41","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/74670596_1173812076139343_4136725088609239040_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=CZTyrXTVL0EAX-i21J9&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAojxVZpCJtROSDVKQp_RSZXDre4BDtLj0RLiGgsvjWVA&oe=64A6F941&_nc_sid=ee9879");
setImageURL("pfp30","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/346918135_1600751643735644_1248338457911554951_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=YW4cL6Fg1NwAX-xi1Sx&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAgpQUlSTobenpdnWP8vpybxrp4Ewckk5nHXZTR45okFQ&oe=64A7A8AA&_nc_sid=ee9879");
setImageURL("pfp42","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/66841483_2332320473699695_226021438476255232_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=kOkJON5k1rEAX-zz25u&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBIn-uKWNRpccQbvVdBy7BdiV8TTNismnOArT_y81qs-A&oe=64A65ABC&_nc_sid=ee9879");
setImageURL("pfp43","https://instagram.fosu2-2.fna.fbcdn.net/v/t51.2885-19/105561758_715337522620287_439519198617479565_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=FjXCGpg9EU4AX_YyrDx&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCkashonjjprvBlyLPzk5zVOu34IQEp6BZnIXp1rERo6w&oe=64A7A60D&_nc_sid=8b3546");
setImageURL("pfp46","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/28427693_432321120532472_3111536748904054784_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=fWYl8O3puIwAX9Muf2Y&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBmfE16Phb0ySiaS2nusRMEY75_P9oq3osaSh3eXPAVlA&oe=64A76CD8&_nc_sid=ee9879");
setImageURL("pfp51","https://instagram.fosu2-1.fna.fbcdn.net/v/t51.2885-19/350457566_661963065804482_1272154330400692300_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=2L2qX5GbGHIAX_I4m6r&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAetE_ra6pMc6IbM2PDpCX-MxmbNy2uF7KHsc8EEKD0fw&oe=64A75D53&_nc_sid=ee9879");
setImageURL("pfp52","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/66274861_365855807414326_3380473650925797376_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=110&_nc_ohc=NG32_O5egC8AX-1Fta9&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBORDbL_cwToXKH0Vh_KgZWDjAz132yoAc3xqErLLOljQ&oe=64A716E3&_nc_sid=ee9879");
setImageURL("pfp53","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/91907168_231929898008699_6691252944848814080_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=QjjbHz6rWIoAX9kNCTG&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfD2IkKmrUdRD1G_eQRx6td1RQBz-YBgEa_jJkNgYYYClw&oe=64A76694&_nc_sid=ee9879");
setImageURL("pfp55","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/104973962_304812973893138_9068483204092135696_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=106&_nc_ohc=lbEqH0mu708AX9HG8ij&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfAzI_NLmaIGYGxj5aomAdf-UgzXe-kDvg4qhRZpC3QYNQ&oe=64A65368&_nc_sid=8b3546");
setImageURL("pfp56","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/77124335_810357039415844_5032169200810983424_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=108&_nc_ohc=cdx8eWPBQd4AX_L0L09&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCmcDWYE4sHFf--b4FAodK_mEtob5GgR-yeYO0qO3cH8A&oe=64A7C961&_nc_sid=ee9879");
setImageURL("pfp58","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/10632098_1461366800818279_2030336056_a.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=MATmYdwVEPEAX8U1A8H&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAsettO6lJfBMKZBFBZFlHQC7ckQOp3AhAf54yk2VA-eQ&oe=64A6CCF0&_nc_sid=ee9879");
setImageURL("pfp59","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/310894774_1143230606546133_5469660352035759322_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=b07J07D7PIMAX96Ock7&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfC6F-LLm391hzwqpVAQgn-fjZGevmmVJRTt9ONP9tCkSA&oe=64A67381");
setImageURL("pfp68","https://instagram.fosu2-1.fna.fbcdn.net/v/t51.2885-19/88187914_204734337298728_7302109006439383040_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=5tVoni86biUAX-rQ3Q4&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfC39uHWxHxdLoECmykv45f3_ldmbAZbAIcSo-i6KcITFA&oe=64A68D5B&_nc_sid=ee9879");
setImageURL("pfp70","https://instagram.fosu2-2.fna.fbcdn.net/v/t51.2885-19/47585255_312638256041821_1668911552629047296_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=a37GVQFWvCwAX-27y6k&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCq0uMl0vRedDPLfYuttB9ZWnYg14cRxxxsDbhieAxsyA&oe=64A60C4C&_nc_sid=8b3546");
setImageURL("pfp72","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/315179461_1326112514831275_353770700317210745_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=Fm2VfxP5B_IAX_mLusO&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfA4uphGZQoExBcl0TVsve0AbU_Kn5fScUP6UwgQQKAOwQ&oe=64A6C563&_nc_sid=8b3546");
setImageURL("pfp74","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/250871197_459215435626883_9156919220856192321_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=Prfnp9PnF6UAX8N8cq7&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBtuy5Sgllw9NAzIGABgNfmfrOxygqP4n5u4iHDdcKUdw&oe=64A62366&_nc_sid=ee9879");
setImageURL("pfp79","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/148798705_257095569315417_6285513387498289054_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=OH_e7_peaZwAX-CXLsC&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBFSni6vR7sIC7IGCBcuOJpmjwdJSRXtU9L4M_FRGpfuw&oe=64A72767&_nc_sid=ee9879");
setImageURL("pfp80","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/60273851_2344124848964373_5964652333584351232_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=81xKQdRNEm0AX8ZeS4H&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfB6JWMbHg6H1ViYVU2yMEinAJVsRDYYx7bO_akXVFvEhg&oe=64A6D98D&_nc_sid=ee9879");
setImageURL("pfp82","https://scontent-iad3-2.cdninstagram.com/v/t51.2885-19/49324180_2178860119096487_6784942644184219648_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-2.cdninstagram.com&_nc_cat=111&_nc_ohc=zuszTX-dO5AAX-rfU1l&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCkvfm7VSqZEr5hrNTKY3n9V_QdhFlSJvgn06iTSLQrkg&oe=64A76169&_nc_sid=8b3546");
setImageURL("pfp84","https://instagram.fosu2-1.fna.fbcdn.net/v/t51.2885-19/67286510_414498459164604_7638659916449710080_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=BhaEly5qgJYAX9m9Xx2&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfC1xhDfhdv9ORlNlypd4DzzeLeWQYxmecrXQ0y5JZJJWw&oe=64A69391&_nc_sid=ee9879");
setImageURL("pfp87","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/56273984_424526471452483_1346406040375132160_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107&_nc_ohc=yEwLN8NrLsUAX9Ygm9_&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDbjgaGUhsDe4bpbOIL_DdwlHctiuf8y8GHj7HSz5Gw1g&oe=64A7112E&_nc_sid=ee9879");
setImageURL("pfp88","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/301020248_781612529713444_4281721941641082297_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=i4ZIiYXUCmMAX9F4YFe&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfAciCHiwWeqg1MI9r-iKfavjRaszdbkWV8bg5zYmO3-Kg&oe=64A66884&_nc_sid=ee9879");
setImageURL("pfp91","https://scontent-iad3-1.cdninstagram.com/v/t51.2885-19/119947168_691777908102309_7203089603778364371_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=PmyDN2-XGRAAX9YRvhy&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCZGpc9biTCAgM6iQHHEEBVSZgVrlhOaSmeW6N49xlmjw&oe=64A742ED&_nc_sid=ee9879");
setImageURL("pfp95","https://instagram.fosu2-1.fna.fbcdn.net/v/t51.2885-19/336303526_580228867378589_2408752462439234930_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=H6gWDZ084L8AX-JK2G_&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDc6eiSzFU8qGnBqkCCJnqM8oabm0mFbssuKJBYBIDfTw&oe=64A5F6B8&_nc_sid=ee9879");
setImageURL("pfp96","https://instagram.fosu2-2.fna.fbcdn.net/v/t51.2885-19/253562261_263339502409249_3941714222658745545_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=JNEjpkmXy1MAX9H3foQ&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDUZOi-7mTBL_L2G8xHYLXSs0rRHSyLKrS9f1dNQisrGQ&oe=64A77960&_nc_sid=ee9879");
setImageURL("pfp97","https://instagram.fosu2-2.fna.fbcdn.net/v/t51.2885-19/123599021_432064671288685_6888222648334888166_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=sAVbWQYUy-UAX_QxPDy&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfBliYdn4T-LF_9dcnILhbHjwUvdpb5E4z5nczsBndtAsA&oe=64A68E6A&_nc_sid=ee9879");
setImageURL("pfp98","https://instagram.fosu2-2.fna.fbcdn.net/v/t51.2885-19/136065699_919271071943677_1685392193930336865_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=9FbYfkTerA4AX_PBwXO&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfCGGGi5wjn9YUDVP064C5lISnYy1E5NjkF4gFCCzl8FoA&oe=64A61386&_nc_sid=ee9879");
setImageURL("pfp99","https://instagram.fosu2-2.fna.fbcdn.net/v/t51.2885-19/336168598_508032671538553_9205468128430229381_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fosu2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=U_JnINQtwMkAX815PH8&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfBNNBXfd6ubGeSOa8AFQMLFwXtGJX-txsSX61kVT9stGA&oe=64A7D673&_nc_sid=8b3546");
*/


var sortedUsernames = [];
var pfpXCoord = 0;
var pfpYCoord = 0;
var pfpZCoord = 0;
var newX;
var newY;
var viability = 1;
var xCoords = [1.50,0.50,-7.83,-10.00,-2.88,2.50,-3.88,6.25,-4.00,-5.00,-9.00,2.42,4.83,7.50,8.60,4.42,-10.00,-9.00,-4.13,-8.00,-0.25,0.75,-0.13,4.00,-9.42,1.88,8.13,-3.00,3.00,10.00,-8.25,-4.63,-2.90,-9.00,-1.58,2.25,-5.83,2.50,-4.33,7.80,9.00,5.17,-9.67,0.67,4.83,-2.17,-3.17,-6.17,3.00,-5.90,-9.00,-9.75,-9.83,6.50,4.50,1.17,5.42,7.33,-3.50,-2.92,-10.00,-9.00,-10.00,-2.92,-5.75,-8.33,5.00,6.00,5.20,6.75,-9.00,-4.10,-7.00,-4.83,-8.75,-0.67,-0.83,-10.00,-1.83,-8.50,4.75,-8.92,-9.33,-2.08,1.00,-10.00,-6.25,-8.25,-8.58,2.17,-10.00,-9.80,-7.50,-8.50,1.25,6.58,-7.75,-8.17,-9.75,-9.83];
//             0    1     2    3      4     5    6     7    8     9     10    11   12   13   14   15   16     17    18    19    20    21    22    23   24    25   26   27    28   29    30    31    32    33     34    35   36    37   38    39   40   41   42    43   44   45    46    47    48   49    50    51    52    53   54   55    56   57   58    59    60     61    62    63    64    65    66   67   68   69    70   71   72    73    74    75    76    77     78    79    80    81    82    83    84    85    86    87    88    89       
var yCoords = [-8.38,7.60,-3.20,-8.40,-0.63,1.13,-1.38,-10.00,-3.20,-5.30,-7.75,4.30,-8.60,-8.13,-8.13,-1.00,-10.00,-8.38,-8.60,-8.90,-10.00,7.20,4.13,-9.00,-7.00,-7.75,7.88,-3.00,-1.25,-10.00,-7.70,3.50,-7.00,3.50,-3.50,-9.80,5.80,2.80,-8.40,-10.00,-10.00,-7.70,-7.90,-2.80,-3.40,5.30,-1.60,-1.10,5.40,10.00,-8.20,-4.70,-1.00,-9.30,-3.10,2.40,-6.20,-1.00,-2.50,-3.50,-10.00,-4.00,-1.88,-1.50,-3.60,-3.40,-7.00,-0.88,-10.00,-10.00,-2.00,-8.40,4.00,-3.20,-6.25,7.30,5.90,3.00,4.60,-8.80,-7.70,-10.00,-8.00,-10.00,-9.70,-5.50,-3.50,-4.50,-1.90,-1.40,4.40,-9.00,-2.80,-6.80,-10.00,1.10,-6.25,-3.0,-8.70,-9.70];
//             0     1    2    3      4     5    6     7    8     9     10    11   12   13    14    15    16     17    18    19    20     21    22    23   24    25   26   27    28    29     30    31    32    33     34    35   36   37   38    39   40     41    42    43    44    45    46    47    48   49    50    51    52    53    54    55    56   57    58    59    60     61    62     63    64    65    66   67   68     69     70    71    72    73    74    75    76  77  78   79     80    81     82    83     84    85    86    87      88  89
var zCoords = [-9.00,9.50,-8.40,-9.70,-8.00,0.25,-3.63,-1.25,-8.00,-9.00,-10.00,7.00,-3.00,-6.00,4.00,-3.70,-10.00,-10.00,-9.00,-6.70,0.00,8.30,8.50,0.00,-8.90,-7.00,7.63,-5.00,-0.38,-1.20,-9.10,0.13,-7.10,-9.10,-5.80,-0.10,-3.10,4.00,-6.20,0.00,0.00,-1.90,-9.30,2.40,3.20,5.90,-3.90,-7.60,5.70,7.00,-9.00,-10.00,-9.50,3.10,4.60,6.20,-3.80,5.00,-4.40,-0.60,-5.00,-9.60,-2.50,-7.40,-4.50,-7.80,4.00,4.00,0.00,-6.50,-10.00,-9.10,0.00,-6.60,-9.00,1.80,9.00,-9.50,7.20,-10.00,4.40,-10.00,-8.80,-5.50,-5.40,-10.00,-6.50,-8.60,-9.50,-1.60,-3.80,-8.10,-7.20,-8.60,-1.60,5.50,-9.00,-7.10,-8.60,-10.00];
//             0     1    2    3      4     5    6     7    8     9     10     11   12    13    14   15    16     17     18    19    20    21    22    23   24    25   26   27    28   29    30    31    32    33     34    35   36   37   38    39   40   41   42    43   44   45    46    47    48   49    50    51    52    53   54   55    56   57   58    59    60     61    62    63    64    65    66   67   68   69    70   71    72    73    74    75    76  77     78    79    80    81    82    83    84    85      86    87    88    89
console.log(usernames.length + "=" + xCoords.length + "=" + yCoords.length + "=" + zCoords.length);

var canXCoords = [-0.60,-5.20,1.50,3.30,2.10,3.50,3.80];
var canYCoords = [1.00,-0.60,3.00,3.50,5.70,6.50,5.60];
var canZCoords = [-3.60,-7.20,1.50,5.10,8.10,8.40,7.95];
var canNames = ["M. Williamson","Cornel West","Joe Biden","Chris Christie","Mike Pence","Ron Desantis","Donald Trump"];                            
var sortedCanNames = [];
var canDistances = [];
var sortedCanDistances = [];
var candidateXCoord = 0;
var candidateYCoord = 0;
var candidateZCoord = 0;
var canDistance;
var maxCanDistance;
var maxCanIndex;

var idXCoords = [-2.6,-8.9,-4.0,-8.0,-1.6,-10.0,-8.0,-1.0,-8.9,-7.0,-2.0,-9.0,-8.0,-2.6,1.0,2.0,9.0,3.0,4.0,5.0,1.0,8.0,5.0,1.0,2.0,6.0,8.0,4.0,10.0,-7.0];
var idYCoords = [7.0,4.8,7.0,2.0,-2.0,0,-2.0,-2.0,-2.6,-6.0,-6.0,-9.0,-9.0,-9.0,10.0,7.0,8.0,4.0,6.0,3.0,1.0,0,-2.0,-7.0,-7.0,-7.0,-8.0,-10.0,-10.0,-1.0];
var idZCoords = [7.3,-7.0,8.0,-5.0,-5.9,-7.0,-6.0,-4.0,-8.0,-8.0,0,-10.0,-9.0,-2.0,10.0,5.0,8.0,6.0,3.0,5.0,-5.0,-5.0,0,-7.0,0,0,0,0,0,-6.0];
var idNames = ["Strasserism","Marxism-Leninism","Social Nationalism","Trotskyism","Social Democracy","Orthodox Marxism","Libertarian Marxism","Social Liberalism","Left-Communism","Libertarian Socialism","Libertarian Market Socialism","Anarcho-Communism","Anarcho-Collectivism","Mutualism","Fascism","State Capitalism","Neo-reactionism","Right-Wing Populism","Neoconservativism","Conservatism","Modern Liberalism","Conservatarianism","Constitutionalism","Bleeding Heart Libertarianism","Classical Liberalism","Right-Wing Libertarianism","Minarchism","Anarcho-Individualism","Anarcho-Capitalism","Democratic Socialism"];                            
var sortedIdNames = [];
var idDistances = [];
var sortedIdDistances = [];
var idXCoord = 0;
var idYCoord = 0;
var idZCoord = 0;
var idDistance;
var maxIdDistance;
var maxIdIndex;

var count = -1;
function calculatePfpDistances(){
  for (var i = 0; i < usernames.length; i++) {
    pfpXCoord =xCoords[i];
    pfpYCoord =yCoords[i];
    pfpZCoord =zCoords[i];
    distance =Math.pow((Math.pow((xCoord-pfpXCoord),2) + Math.pow((yCoord-pfpYCoord),2) + Math.pow((zCoord-zCoords[i]),2)),0.5);
    appendItem(distances,distance);
  }
  console.log("usernames.length: " + usernames.length);
  for (var k = 0; k < zCoords.length; k++) {
    console.log(distances);
    maxDistance = distances[0];
    for (var j = 1; j < distances.length; j++) {
      if(maxDistance < distances[j]){
        maxDistance = distances[j];
        maxIndex = j;
      }
    }
    if(maxDistance == distances[0]){
      maxIndex = 0;
    }
    console.log("maxIndex: " + maxIndex);
    insertItem(sortedDistances,0,maxDistance);
    insertItem(sortedUsernames,0,usernames[maxIndex]);
    removeItem(distances,maxIndex);
    removeItem(usernames,maxIndex);
    console.log("k: " + k);
  }
}
function displayPfpMatches(){
  for (var l = 0; l < 10; l++) {
   setText("percent" + l,Math.round(100-(2.88675134595*sortedDistances[l])) + "%");
   setText("username" + l,sortedUsernames[l]);
   setProperty("percent" + l,"text-color",rgb(sortedDistances[l]*10,(1/sortedDistances[l])*255,0));
   /* showElement("lpfp"+l);
   setPosition("lpfp"+l,160,50+(l*40)); */
   console.log(sortedDistances);
  }
}

function calculateCandidateDistances(){
  canDistances = [];
  for (var i = 0; i < 7; i++) {
    candidateXCoord = canXCoords[i];
    candidateYCoord = canYCoords[i];
    candidateZCoord = canZCoords[i];
    canDistance = Math.pow((Math.pow((xCoord-candidateXCoord),2)+Math.pow((yCoord-candidateYCoord),2) + Math.pow((zCoord-candidateZCoord),2)),0.5);
    appendItem(canDistances,canDistance);
  }
  for (var k = 0; k < 7; k++) {
    maxCanDistance = canDistances[0];
    for (var j = 1; j < canDistances.length; j++) {
      if(maxCanDistance < canDistances[j]){
        maxCanDistance = canDistances[j];
        maxCanIndex = j;
      }
    }
    if(maxCanDistance == canDistances[0]){
      maxCanIndex = 0;
    }
    console.log("maxCanIndex: " + maxCanIndex);
    insertItem(sortedCanDistances,0,maxCanDistance);
    insertItem(sortedCanNames,0,canNames[maxCanIndex]);
    removeItem(canDistances,maxCanIndex);
    removeItem(canNames,maxCanIndex);
  }
}

function calculateIdDistances(){
  
}
function displayCandidateMatches(){
  for (var l = 0; l < 7; l++) {
   setText("percent" + l,Math.round(100-(2.88675134595*sortedCanDistances[l])) + "%");
   console.log(sortedCanNames);
   console.log(sortedCanDistances);
   setText("username" + l,sortedCanNames[l]);
   setProperty("percent" + l,"text-color",rgb(sortedCanDistances[l]*10,(1/sortedCanDistances[l])*255,0));
   /* showElement("lpfp"+l);
   setPosition("lpfp"+l,160,50+(l*40)); */
  }
}
function endTest(){
  calculatePlacement("x");
  calculatePlacement("y");
  calculatePlacement("z");
d3.csv('/Users/Amanda/Desktop/test/all-responses.csv', function(err, rows){
function unpack(rows, key) {
	return rows.map(function(row)
	{ return row[key]; });}

var trace1 = {
	x: ["9.33", "7.5", "9.25", "-9.17", "-3", "2.5", "5.08", "-4.75", "2.25", "4.17", "-9.75", "-9.17", "-9.17", "8.17", "-1", "7.33", "4.92", "-9.92", "-10", "7.33", "6.67", "-0.67", "-7.75", "-10", "4.5", "6.5", "6.5", "-9.17", "-9.93", "5.92", "-4.58", "-2.25", "7.92", "0.83", "6.92", "5.5", "5.83", "7", "8", "-10", "-10", "-9.42", "-8.94", "-10", "4.92", "4.75", "5.25", "-6.25", "9.5", "3.33", "2.3", "-0.92", "7", "7", "5.33", "-8.25", "-1", "7.33", "7.5", "4.08", "-9.67", "-4.75", "5", "-7.8", "-5", "-5.5", "-9.17", "-9.75", "5.25", "-10", "-10", "-9.17", "-10", "-4.58", "9.17", "-9.27", "10", "-9.42", "4.5", "9", "4.17", "7", "9.33", "-9.17", "9.25", "-8.9", "-8.5", "2.3", "3.33", "0.83", "-4.67", "4.83", "4.5", "-6", "-4.83", "8.17", "3.99", "-9.67", "-9.17", "-0.67", "10", "-10", "-9.92", "4.25", "-8.75", "-8.58", "-5.5", "-10", "-10", "5.83", "-2.83", "3.83", "-1.75", "2", "-10", "-4.83", "-1.42", "9.5", "-4.75", "7", "7.33", "-10", "9.33", "10", "2.6", "-3.67", "2.6", "9.5", "-6", "6.58", "-3.17", "-4.92", "-9.75", "-10", "4.17", "-9.17", "-0.67", "5.5", "-9.67", "1.88", "3.58", "10", "4.22", "3.83", "-7.42", "-10", "-6.92", "-10", "4", "-9.67", "8", "-6.5", "-8.17", "2.3", "6.92", "-10", "3.5", "2.17", "-4.83", "7.09", "1.42", "-9.17", "-9.58", "0.83", "-6.92", "6.25", "6.42", "-5.9", "9.5", "-5", "-10", "10", "-6", "-7.75", "-9.17", "-8.92", "-10", "-9", "4", "-7.98", "-5", "-7.67", "-7.25", "-10", "-9.41", "-4.08", "4", "-9.92", "-9.75", "7.4", "-3.58", "0.42", "10", "-5.75", "10", "-10", "-9.67", "-10", "4.25", "0.1", "3.83", "-6.92", "-4.67", "-10", "3.5", "-6.25", "-2.75", "-10", "6.67", "2.75", "-9.67", "-7.83", "0.75", "8.75", "-9.17", "-10", "5.08", "-8.33", "-8.33", "-0.5", "-2.17", "-7.5", "-4", "-6.17", "1.75", "-5.67", "-10", "-0.42", "-10", "2.17", "-5.25", "1.25", "-5.5", "-1.75", "-1", "-9.5", "2", "2.58", "-0.83", "-7.92", "-6.42", "-6.25", "-4.08", "-2.83", "-1.83", "1", "-5.83", "-10", "3.58", "-2.08", "-7.5", "4.75", "-8.92", "-9.17", "4.08", "-9.33", "-8.58", "-9.67", "-9.25", "0.58", "-9.92", "-8.92", "-6.67", "4.92", "-8.25", "-5.92", "6.75", "-6.25", "-1.92", "1.17", "-9.83", "-9.75", "-4", "10", "6.25", "-8.5", "-0.92", "6.92", "-0.17", "10", "-4.33", "-1", "6.92", "-10", "8.42", "-8.08", "7.75", "7.42", "-8.08", "-0.17", "-7.08", "2.83", "4.17", "-3.5", "6.92", "-9.92", "7.83", "6.08", "-9.5", "4.33", "-0.83", "-9.17", "4.42", "-8.67", "-9.42", "-9.17", "-8.58", "-5.92", "-7.83", "9.5", "-9.25", "-7.92", "-4.33", "-4.5", "-3.33", "-10", "-3.08", "1.17", "4.92", "7.42", "-8.42", "-10", "5.5", "0.58", "5.5", "-1.83", "-0.58", "5", "-6.17", "-8.58", "1.42", "0.5", "4.67", "6.92", "-4.75", "2.17", "6.5", "1.17", "-6.17", "-3.17", "-6.17", "-9.42", "-8.67", "4.83", "0.67", "-4.33", "3.08", "-9.33", "3", "-6.17", "2.17", "5.33", "5.42", "-10", "5.5", "-9.83", "-2.5", "1.25", "10", "9.5", "2.25", "-4.58", "-2.5", "-8.58", "6", "4.17", "-6.67", "-9.17", "6.75", "-10", "10", "-7.25", "-3", "-9.5", "8", "-9.25", "-1.58", "-9.75", "-8.25", "3.83", "-9.67", "-2.92", "-9.92", "-2.92", "2", "0.58", "-2.17", "-3.92", "3.75", "-10", "-1.83", "-4.2", "-2.83", "-0.83", "-9", "10", "-8.17", "1.5", "-8.58", "5.17", "3", "2.75", "-0.92", "-6.08", "3.42", "2.17", "1.25", "-6", "2.92", "-9.5", "7.17", "-5.67", "-9.8", "-9.83", "2.67", "4.33", "8.33", "5.33", "6.5", "6.5", "6.58", "2.58", "9.33", "-8.83", "4.58", "-7.33", "-1.17", "-8.17", "3.75", "5.17", "3.75", "4.75", "-0.08", "6.17", "6.58", "1.83", "2.08", "2.5", "3.58", "7.33", "9.08", "8.33", "5.42", "6.92", "2.67", "6.58", "7.17", "9.17", "6", "3.58", "7", "6.08", "6.75", "7.08", "-7.17", "8", "4.83", "8.67", "7.25", "5.58", "9.25", "4.67", "5.08", "-6.17", "4.83", "5", "6.25", "6.92", "8", "3.08", "-4", "3.17", "-0.33", "5.42", "-4.58", "8.25", "6.33", "8.17", "7.58", "5", "0.25", "-4.58", "4.25", "-7.58", "-1.67", "-4.5", "-4.75", "-4.5", "4.58", "-1.67", "-9.92", "7.67", "-6.75", "-0.1", "1.67", "0.67", "3.42", "-1.5", "4.33", "0.5", "1.92", "0.5", "0.08", "-3", "8.33", "-7.67", "-1.33", "3.17", "3.25", "8.33", "7.33", "9", "3.33", "5.58", "4.92", "4.58", "5", "-1.67", "-2.58", "3.92", "4.33", "-1.67", "-6.75", "-3.92", "8.58", "-1", "2.08", "0.25", "-3.25", "6.25", "-0.5", "-2.58", "0.33", "3.83", "5.08", "-1", "7", "-1", "-5.83", "-2.75", "-3.25", "-3.25", "4.67", "-6.67", "-0.08", "-1.58", "4.92", "2.75", "-4.25", "2.42", "-5.58", "-2.33", "-3.42", "-4.58", "-6.5", "-2.92", "1.75", "-2.75"], y: ["-10", "-10", "-8", "-9.8", "-6", "-7.6", "-4.1", "-10", "-9.1", "0.3", "-1.1", "-7.3", "-7", "-6.5", "-3", "-8.9", "-10", "-8.1", "6", "-10", "-7.8", "-9.6", "-2.5", "-9", "-3.1", "-8.8", "-7.1", "-9.7", "-8.3", "-9.5", "-0.8", "-2.2", "-8.8", "-3.7", "-0.5", "-10", "-7.3", "-9", "-9", "-9", "2.8", "-10", "-9", "7", "-8.3", "-7.7", "-8.2", "-3.5", "-8.5", "-1.2", "-1.2", "10", "-9", "-5.5", "-8.8", "0.1", "6", "-8.9", "-10", "-5.7", "10", "-10", "-7.7", "-8.8", "8", "6.8", "-3.3", "-1.1", "-1.1", "-5.5", "5", "-9.8", "-10", "-0.8", "-10", "-7.3", "-10", "-10", "-3.1", "-8", "0.3", "-9", "-10", "-5.2", "-8", "4.5", "-5", "-1.2", "2.6", "-3.7", "-2.9", "-9.2", "-10", "-3.5", "-3.2", "-5", "-9.8", "-7.6", "-9.7", "-9.6", "9.6", "-9.5", "-8.3", "-9.3", "-0.6", "-1.9", "-3.8", "-9", "-9", "-7.3", "-9.9", "-1.7", "-9.7", "1", "0.7", "-8.9", "5.5", "-9", "-10", "-4.9", "-8.9", "1", "-10", "-10", "-5", "-2", "9.8", "-9.7", "8", "-4.2", "-9.8", "1.6", "-1.1", "8", "0.3", "-9.7", "-9.6", "-10", "-6.3", "-9.51", "-1.3", "-8", "-10", "-10", "-2", "5.4", "-4.2", "6.2", "-4", "-7.6", "-7.5", "7.6", "-3", "-1.2", "-6.2", "1", "-9.9", "-1.4", "-3.2", "-7.4", "-4.2", "-7.3", "-9.2", "-3.7", "-2.4", "6.1", "-9.5", "10", "-10", "-10", "-7", "5", "-8", "-5.6", "-7", "-9.3", "4", "0.1", "3.3", "-3.8", "8", "-3.6", "-4.1", "-9.7", "-10", "6.2", "3", "-9", "-2.4", "9.1", "-5.8", "-5.4", "-10", "-5.5", "-10", "3", "-7.6", "-6.8", "-1.3", "-8.9", "-1.8", "-0.4", "-3.2", "-7.6", "-7.9", "-10", "-4.9", "-7.2", "-9", "6.4", "0.2", "-6.2", "7.2", "-6", "6.2", "-4.4", "-8.4", "6", "-10", "-8.7", "-5.9", "-2.8", "-1.8", "-3.7", "-10", "6.1", "4.4", "-9", "4.4", "-1.4", "-1.3", "-10", "-6.5", "3.3", "-9.8", "-7.4", "-0.6", "-5.4", "9", "-8.8", "-3.5", "-3.5", "-10", "-8.3", "4.6", "-9.7", "5.8", "-5.5", "2.4", "-10", "-7.6", "-7.7", "-9.3", "-9.8", "-5.7", "-8", "-1.9", "-7.6", "-10", "-9.5", "-8.3", "-10", "7.8", "-8.5", "-0.5", "-2.1", "-5.9", "-5.6", "-0.1", "2.4", "2.4", "-8.9", "-7.1", "8.9", "-10", "-9.1", "1.4", "4.5", "-9.1", "5.1", "6.8", "7.1", "5.5", "-9", "-9.8", "-2.6", "-7", "-9.2", "-8.4", "6.3", "-7.2", "-9", "0.3", "8.5", "-9.8", "-7.8", "-10", "-0.2", "-7.2", "2.6", "5.9", "-7.1", "-1", "-5.2", "-8", "-7.1", "-4.6", "-2.9", "-7.1", "-10", "-5", "-9.5", "7.3", "-9.2", "-3.3", "-4", "-8.8", "2.2", "-8.8", "-9.9", "-7.6", "-5.2", "-3.5", "4.5", "-8.1", "10", "6.1", "-8", "-8.3", "-7.7", "-5.2", "8.8", "-8.4", "-8.8", "-1", "-0.6", "-9.3", "1.8", "-1.1", "-1.6", "-1.1", "-8.7", "-4.8", "-3.4", "-2.8", "-8.4", "-3.4", "-7.7", "5.4", "-1.1", "2", "-7.2", "-6.2", "-8.9", "-8.1", "-1", "8.5", "6.1", "-10", "-9.9", "-9.8", "-0.8", "-7", "-8.3", "-7.7", "-0.7", "-9.7", "9", "-6.9", "-10", "5", "-6.8", "-10", "-9", "-8.7", "-9.7", "-3.5", "-8.2", "-8.3", "-1.1", "-7.9", "-1.5", "-4.7", "-3.5", "8.2", "-9.95", "5.3", "-8.4", "-8.2", "-8.4", "-6.4", "-9.3", "2.9", "2.1", "-6.4", "-10", "-1.5", "-7.5", "-6.2", "4.1", "0.6", "2.2", "-4", "-2.9", "-2.9", "8.8", "8", "4.2", "3.5", "4", "-0.9", "-5.5", "-7.9", "-9.1", "-6.2", "3.8", "-10", "-8", "-10", "-5.9", "1.1", "-1.2", "-8", "-3.3", "5.9", "-4.7", "-1", "-7.6", "-7", "-1.8", "-5.7", "-8.4", "-1.2", "-1.1", "-6.3", "-4.6", "1.4", "-4.3", "-10", "-6.4", "-7.3", "-10", "-7.9", "-7.8", "-8.5", "-7.9", "-8", "-8.9", "-9.5", "-10", "-7.9", "1.1", "-9.3", "-7.6", "-4.4", "-8.9", "-4", "-6.6", "-7.1", "-9.8", "-6.6", "-5.1", "-8.2", "-9.4", "-1.8", "-7", "-9.3", "-9.9", "-8.7", "-8", "7.4", "4", "-0.2", "-5", "-0.3", "-9.7", "-6.2", "-5.9", "-3.5", "-2.7", "-0.5", "-2.2", "-3.8", "-1.5", "-2.7", "-4", "-0.8", "-3.5", "-4.4", "-3", "1.6", "-4.7", "-1.8", "-1.6", "-0.1", "-0.9", "-4.2", "-0.2", "-4.7", "-1.3", "-4.5", "-1", "-1.1", "-1.1", "-7.2", "-4.5", "-4.9", "-1", "-0.7", "-5.4", "-3.5", "-9", "-3.7", "-1.7", "-4", "-1.6", "-0.6", "0.4", "-2.6", "-4.9", "-2.7", "-1.7", "-3.7", "-2", "-7.9", "0.1", "1.3", "-0.1", "-0.2", "-6.7", "-4.7", "-2", "-2", "-0.8", "-0.5", "-0.1", "-6.8", "0.9", "-1.2", "-2.4", "-1.5", "-0.4", "-0.9", "-1.5", "0.1", "-0.4", "-0.7", "-1.6", "2.1", "-2.2", "-1.5", "-2.4", "-2.5", "-2.2", "-5.9", "-1.9", "-3.4", "-1.9"], z:["-7.2", "-4.1", "-3", "-9.6", "-4", "-4", "-1.1", "-7.5", "1.5", "7.1", "-10", "-9.4", "-8", "4.9", "-5.5", "-2.4", "0.9", "-9.1", "-10", "4", "-0.2", "-3.4", "-6.9", "-10", "4.6", "-5.6", "-4.2", "-10", "-10", "-5", "-7.5", "5.7", "3.3", "-6.5", "7.7", "-2.6", "-1.3", "0.9", "1", "-10", "-9.6", "-6.8", "-8.4", "-10", "-5.9", "4.4", "0", "-6.5", "1", "-0.5", "1.6", "9", "0.5", "3", "-3.7", "-6.1", "0", "-2.4", "-4.1", "-3.1", "9.4", "-7.5", "-2.3", "-7.1", "10", "4.5", "-8.5", "-10", "1.1", "-10", "-9.5", "-9.6", "-10", "-7.5", "1.7", "-9.4", "10", "-6.8", "4.6", "-1", "7.1", "0.7", "-7.2", "-9", "-3", "-3", "-8", "1.6", "6.2", "-6.5", "-4.3", "-0.8", "-0.8", "-3", "-6.6", "4.9", "-8.7", "-10", "-10", "-3.4", "10", "-8.2", "-10", "-4.3", "-7.7", "-9.5", "-7.3", "-9", "-10", "-1.3", "-6.2", "0.4", "-8.7", "-3.8", "-9.9", "-9", "0.8", "0", "-7.5", "6.9", "-2.4", "-10", "4", "10", "-9", "-7.3", "-4.8", "0", "2", "-1.5", "-7", "-6.1", "-10", "-10", "7.1", "-10", "-3.4", "2.6", "-9.2", "-1.7", "-1.2", "5", "0", "-5.1", "-5.8", "-1.7", "-6.8", "-8.8", "-8.8", "-10", "4.6", "6", "-8.2", "1.6", "4.2", "-9.9", "-2.7", "-1.6", "-6.6", "5.6", "-7.3", "-9.4", "-10", "-6.5", "-8.3", "3.6", "-4.2", "7", "-1.6", "-8", "-10", "10", "0", "-8.8", "-8", "-8.2", "-9.4", "-8.7", "0.3", "3.2", "5.4", "-9.4", "-7.3", "-10", "-9.6", "7.8", "4", "-9.75", "-10", "7.7", "-4", "-2.9", "7.43", "-5.4", "3", "-10", "-10", "-9.6", "1.9", "-9.8", "6.9", "-6", "-5", "-8.7", "-2.3", "-6", "-5.2", "-10", "2.6", "-1.1", "-4.3", "-9", "8.3", "-5.4", "-7.4", "-8", "3.4", "0.5", "-9", "-4", "-5.2", "-7.2", "-6.1", "-6.2", "-4.4", "2.9", "-3.8", "3.4", "-3.8", "-1.6", "-1.7", "-1.6", "4.9", "7.7", "-2.7", "-9.8", "-1.7", "-8.8", "10", "-8.8", "-8.5", "-6.5", "-6.2", "-3.5", "7.2", "-5.4", "-3.1", "-10", "2.6", "-5.5", "-5.4", "4.4", "-8.2", "-9.6", "-3.1", "-8.8", "-9.5", "-10", "-5.7", "-0.1", "-10", "-10", "8.3", "0.9", "-6.5", "-7.8", "0", "-5.2", "-4.6", "6.2", "-9.8", "-8.4", "-0.4", "9.6", "-1.25", "-9.4", "6", "6.2", "-1.4", "10", "7.9", "9.4", "7.1", "-8", "-1.6", "-8.5", "4.6", "-5.9", "-9.2", "7", "-8.3", "-4.9", "7.1", "9", "-5.5", "-10", "-5.5", "-0.3", "-8.8", "5.9", "9", "-8.8", "-3.7", "-7.3", "-8", "-8.8", "-7.8", "-6.9", "-9.3", "1.2", "-8.2", "-8.7", "8", "-7.1", "-3.8", "-9.9", "-2.9", "0.1", "-1.7", "-4.1", "-8.1", "-6", "2.5", "8", "1.5", "8.4", "7.7", "-8.6", "-7.7", "-9.2", "0.1", "9.4", "-3.4", "-1.1", "-8.2", "1.8", "3.1", "3.6", "-7.5", "-3.9", "-7.5", "-7.7", "-7.4", "3.2", "2.4", "-6.2", "-2.6", "-10", "5.7", "-7.6", "2", "1.9", "-3.8", "-9", "1.5", "-9.5", "9", "8.3", "1", "-1.2", "-0.1", "-7.5", "-5.8", "-8", "1.9", "3.6", "-7", "-7.4", "-0.2", "-5", "7.4", "-7.9", "-6.9", "-9.7", "2.9", "-9.8", "-5.8", "-9.2", "-9", "1", "-9.3", "-7.4", "-9.8", "-0.6", "7.7", "-0.1", "5.9", "1.1", "-4.2", "-9.7", "-3", "-9", "6.4", "-6.4", "-9.4", "5.4", "-5.5", "-4", "-4", "4", "-4.9", "-2", "-5.2", "-8.2", "1.4", "9", "7.7", "-6", "5.4", "-6.1", "4.2", "-7.5", "-9", "-9", "-8.5", "-1.9", "-5.1", "-1.2", "-0.2", "-0.4", "5.5", "-0.1", "-2.6", "-8.9", "0.5", "-2.5", "-2.3", "-8.8", "-5.6", "-5.5", "3.4", "-1.7", "-2.1", "4.5", "2", "-4.9", "1.8", "-3.7", "-3.2", "0.1", "-4.3", "0.6", "-0.4", "-1.9", "-3.8", "1.7", "2.3", "-2.6", "-0.1", "-3.2", "0", "3.1", "0.6", "1", "-7", "-1.7", "0.3", "4.3", "0.8", "0.4", "-2.1", "1.1", "1.3", "-4", "4.8", "-1.1", "0.9", "-1.3", "-1.1", "-6.2", "8.1", "5.8", "-1.9", "1.9", "-7.8", "-4.9", "1.1", "2.6", "4.7", "0.8", "0.9", "-7.4", "-2.8", "-7.3", "-5.1", "-3.8", "-8.4", "-5.1", "1.7", "-1.5", "-7.6", "2.9", "-8.4", "-4.9", "-5.6", "-1.9", "-5.9", "-2.1", "1.1", "-2.5", "-2.6", "-0.3", "-2.7", "-7.6", "-0.9", "-8.5", "-3.9", "0.3", "2.5", "-0.3", "5.5", "0.9", "0.3", "4.3", "0.4", "3.8", "5.2", "-2.2", "-6.5", "-1", "0.1", "-4.9", "-9.2", "-7.8", "-2.9", "-4.9", "1.4", "-3.3", "-5.3", "0.7", "-0.6", "-6.3", "-1.4", "3.1", "1.1", "-5.5", "0.6", "-1.3", "-7.4", "-3.5", "-3.3", "-2.6", "4.5", "-8.4", "-3.1", "-6.9", "3.1", "-0.3", "-4.7", "-2", "-5.4", "-4.9", "-5", "-5.3", "-7.8", "-4.4", "1.4", "-6.7"],
	mode: 'markers',
	marker: {
		size: 1,
		color: 'rgba(0, 0, 0, 0.75)',
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter3d',
	name: "Sample"
};
trace2 = {x: [xCoord], y: [yCoord], z: [zCoord],
mode: 'markers',
	marker: {
		size: 5,
		color: 'rgba(0, 0, 0, 0.75)',
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter3d',
	name: "Your results"
};
trace3 = {x: ["4.9722"], y: ["-0.9852"], z: ["4.2185"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Constitutionalist Conservatism"
};
trace4 = {x: ["5.0232"], y: ["5.1720"], z: ["4.1200"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Neo-Conservatism"
};
trace5 = {x: ["8.4425"], y: ["-7.1100"], z: ["5.1765"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Hoppeanism"
};
trace6 = {x: ["-7.9698"], y: ["-2.6032"], z: ["-7.9887"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Left-Communism"
};
trace7 = {x: ["-8.8785"], y: ["4.8000"], z: ["-7.0100"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Marxism-Leninism"
};
trace8 = {x: ["-1.7154"], y: ["-7.7593"], z: ["-1.4286"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Anarcho-Individualism"
};
trace9 = {x: ["2.1302"], y: ["-2.1400"], z: ["-0.5017"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Moderate Liberalism"
};
trace10 = {x: ["5.4088"], y: ["-8.9353"], z: ["-5.0088"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Bleeding Heart Libertarianism"
};
trace11 = {x: ["-1.6285"], y: ["-2.0636"], z: ["-5.8564"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Social Democracy"
};
trace12 = {x: ["-2.5825"], y: ["6.9139"], z: ["7.3361"],
mode: 'markers',
	marker: {
		size: 20,
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.5},
	type: 'scatter3d',
	name: "Strasserism"
};
trace13 = {x: ["-8.1738"], y: ["-8.4243"], z: ["-8.4209"],
mode: 'markers',
	marker: {
		size: 20,
		color: 'rgba(205, 250, 5, 0.75)',
		line: {
		color: 'rgba(0, 0, 0, 0.14)',
		width: 0.5},
		opacity: 0.14},
	type: 'scatter3d',
	name: "Anarcho-Syndicalism"
};


var data = [trace1,trace2,trace3,trace4,trace5,trace6,trace7,trace8,trace9,trace10,trace11,trace12,trace13,];
var layout = {margin: {
	l: 0,
	r: 0,
	b: 0,
	t: 0
  },scene:{
	xaxis: {
	 backgroundcolor: "rgb(255, 240, 240)",
	 gridcolor: "rgb(255, 255, 255)",
	 showbackground: true,
	 zerolinecolor: "rgb(255, 255, 255)",
    	 title: { text: "Economic Axis"}
	}, 
    yaxis: {
     backgroundcolor: "rgb(240, 255,240)",
     gridcolor: "rgb(255, 255, 255)",
     showbackground: true,
     zerolinecolor: "rgb(255, 255, 255)",
	title: { text: "Social Axis"}
    }, 
    zaxis: {
     backgroundcolor: "rgb(240, 240,255)",
     gridcolor: "rgb(255, 255, 255)",
     showbackground: true,
     zerolinecolor: "rgb(255, 255, 255)",
	title: { text: "Authority Axis"}
    },
    camera: {
      eye: {
        x:0,
        y:0,
        z:1
      },
      up: {
        x:0,
        y:1,
        z:0
      },
      projection: { type: "orthographic"}
      
    }}};
Plotly.newPlot('myDiv', data, layout);
});

  plotResults();
}
function calculatePlacement(variable){
  if (variable === "x"){
  xValue = (ans[0] + ans[1] + ans[2]+ ans[3]+ ans[4]+ ans[5]+ ans[6]+ ans[7]+ ans[8]+ ans[9]+ ans[10] + ans[11] - ans[12] - ans[13] - ans[14] - ans[15] - ans[16] - ans[17] - ans[18] - ans[19] - ans[20] - ans[21] - ans[22] - ans[23])/12;
  xPosition = xValue*16+155;
  xCoord = (xValue).toFixed(2);
  }
  if (variable === "y"){
  yValue = (ans[24] + ans[25] + ans[26] + ans[27] + ans[28] + ans[29] + ans[30] + ans[31] + ans[32] + ans[33] - ans[34] - ans[35] - ans[36] - ans[37] - ans[38] - ans[39] - ans[40] - ans[41] - ans[42] - ans[43])/10;
  yPosition = yValue*16+195;
  yCoord = (-(yValue)).toFixed(2);
  }
  if (variable === "z"){
  zValue = (ans[44] + ans[45] + ans[46] + ans[47] + ans[48] + ans[49] + ans[50] + ans[51] + ans[52] + ans[53] - ans[54] - ans[55] - ans[56] - ans[57] - ans[58] - ans[59] - ans[60] - ans[61] - ans[62] - ans[63])/10;
  zPosition = zValue*16+160;
  zCoord = (zValue).toFixed(2); 
  }
}
function plotResults(){
  setText("text_area67","\nYour results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setPosition("dot",xPosition,yPosition);
  setPosition("bar",zPosition,364);
  hideElement("bar2");
  for (var i = 0; i < 29; i++) {
    idXCoord = idXCoords[i];
    idYCoord = idYCoords[i];
    idZCoord = idZCoords[i];
    idDistance = Math.pow((Math.pow((xCoord-idXCoord),2)+Math.pow((yCoord-idYCoord),2) + Math.pow((zCoord-idZCoord),2)),0.5);
    appendItem(idDistances,idDistance);
  }
  for (var k = 0; k < 29; k++) {
    maxIdDistance = idDistances[0];
    for (var j = 1; j < idDistances.length; j++) {
      if(maxIdDistance < idDistances[j]){
        maxIdDistance = idDistances[j];
        maxIdIndex = j;
      }
    }
    if(maxIdDistance == idDistances[0]){
      maxIdIndex = 0;
    }
    insertItem(sortedIdDistances,0,maxIdDistance);
    insertItem(sortedIdNames,0,idNames[maxIdIndex]);
    removeItem(idDistances,maxIdIndex);
    removeItem(idNames,maxIdIndex);
  }
  console.log(sortedIdNames);
  setText("idLabel",sortedIdNames[0]);
}
function nextQuestion(){
  num = num + 1;
  var num1 = num - 1;
  var previousSlider = "slider" + num1;
  var previousQuest = "text_area" + num1;
  var currentSlider = "slider" + num;
  var currentQuest = "text_area" + num;
  if(num > 1){
  hideElement(previousSlider);
  hideElement(previousQuest);
  }
  console.log(currentSlider);
  showElement(currentSlider);
  console.log(currentQuest);
  showElement(currentQuest);
}
function previousQuestion(){
  if(num > 1){
  num = num - 1;
  var num2 = num + 1;
  var previousSlider = "slider" + num2;
  var previousQuest = "text_area" + num2;
  var currentSlider = "slider" + num;
  var currentQuest = "text_area" + num;
    hideElement(previousSlider);
    hideElement(previousQuest);
    console.log(currentSlider);
    showElement(currentSlider);
    console.log(currentQuest);
    showElement(currentQuest);
  } else {
    setScreen("welcomeScreen");
    num = 0;
  }
}
function hidePfps(){
  for (var z = 0; z < zCoords.length; z++) {
    hideElement("pfp"+z);
  }
}
function showPfps(){
  for (var q = 0; q < zCoords.length; q++) {
    showElement("pfp"+q);
  }
}
function calculatePfpPlacement(){
  for(var o = 0; o <= zCoords.length; o++){
    newX = (xCoords[o]*16)+148;
    if(newX <= 0){
      newX = newX + (0 - newX);
    }
    if(newX >= 295){
      newX = newX - (newX - 295);
    }
    newY = (-(yCoords[o]*16))+188;
    if(newY <= 40){
      newY = newY + (40 - newY);
    }
    if(newY >= 335){
      newY = newY - (newY - 335);
    }
    setPosition("pfp" + o,newX,newY);
  } 
}
function createList(){
  for(var d = zCoords.length; d >= 0; d--){
    insertItem(pfps,0,"pfp"+d);
  }
}
function sort(){
  for(var f = 0; f <= zCoords.length; f++){
    if(pfps.indexOf("pfp" + f) == -1){
      showElement("pfp" + f);
    } else {
      hideElement("pfp" + f);
    }
    // setStyle("pfp" + f,"z-index: " + (pfps.indexOf("pfp" + f)+10));
  }
}
function order(){
  for(var h = 0; h <= zCoords.length; h++){
    setStyle("pfp" + h,"z-index: " + (pfps.indexOf("pfp" + h)+10));
  }
}
function checkViability(){
  viability = 1;
  for (var k = 1; k < 13; k++) {
    var x = getNumber("xInput" + k);
    if((x.length > 4)||(x > 10)||(x < -10)){
      setProperty("xInput" + k,"text-color","red");
      viability = 0;
    }
  }
  for (var j = 1; j < 13; j++) {
    var y = getNumber("yInput" + j);
    if((y.length > 4)||(y > 10)||(y < -10)){
      setProperty("yInput" + j,"text-color","red");
      viability = 0;
    }
  }
  for (var q = 1; q < 13; q++) {
    var z = getNumber("zInput" + q);
    if((z.length > 4)||(z > 10)||(z < -10)){
      setProperty("zInput" + q,"text-color","red");
      viability = 0;
    }
  }
  for (var e = 1; e < 13; e++) {
    var n = getText("nameInput" + e);
    if(n.length > 19){
      setProperty("zInput" + q,"text-color","red");
      viability = 0;
    }
  }
}
function checkTLViability(){
  viability = 1;
  for (var k = 1; k < 13; k++) {
    var x = getNumber("xTLInput" + k);
    if((x.length > 4)||(x > 10)||(x < -10)){
      setProperty("xInput" + k,"text-color","red");
      viability = 0;
    }
  }
  for (var j = 1; j < 13; j++) {
    var y = getNumber("yTLInput" + j);
    if((y.length > 4)||(y > 10)||(y < -10)){
      setProperty("yInput" + j,"text-color","red");
      viability = 0;
    }
  }
  for (var q = 1; q < 13; q++) {
    var z = getNumber("zTLInput" + q);
    if((z.length > 4)||(z > 10)||(z < -10)){
      setProperty("zInput" + q,"text-color","red");
      viability = 0;
    }
  }
  for (var e = 1; e < 13; e++) {
    var n = getText("timeTLInput" + e);
    if(n.length > 19){
      setProperty("zInput" + q,"text-color","red");
      viability = 0;
    }
  }
}
function preview(){
    showElement("button13");
    for (var r = 1; r < 13; r++) {
      setFillColor(rgb(127.5-(getNumber("zInput" + r)*6.375),127.5-(getNumber("zInput" + r)*6.375),63.75-(getNumber("zInput" + r)*6.375)));
      circle((getNumber("xInput" + r)*16)+160,(getNumber("yInput" + r)*-16)+225,5);
      var name = getText("nameInput" + r);
      if(((getNumber("xInput" + r)*16)+138) < 0){
      setPosition("name"+r,0,(getNumber("yInput" + r)*-16)+203);
      } else if(((getNumber("xInput" + r)*16)+138) + (name.length*7.5) > 320){
      setPosition("name"+r,((getNumber("xInput" + r)*16)+138)-(((getNumber("xInput" + r)*16)+138) + (name.length*7.5) - 320),(getNumber("yInput" + r)*-16)+203);
      } else {
      setPosition("name"+r,(getNumber("xInput" + r)*16)+138,(getNumber("yInput" + r)*-16)+203);
      }
      setText("name"+r,getText("nameInput"+r));
    }
}
/*
function previewMeme1(){
  showElement("button19");
  setFillColor("black");
  setText("label46","me when I see the asking price for a house");
  setPosition("label46",(-9*16)+138,(9*-16)+203);
}
*/
function previewTL(){
    showElement("button13");
    var xPosArr = [];
    var yPosArr = [];
    var monthArr = [];
    var yearArr = [];
    var r = 1;
    while((getText("timeTLInput" + r) != "")&&(r < 13)) {
      var xTLPosition =(getNumber("xTLInput" + r)*16)+160;
      var yTLPosition = (getNumber("yTLInput" + r)*-16)+225;
      var time = getText("timeTLInput" + r);
      appendItem(monthArr,Number(time[0]+time[1]));
      var year = Number(time[2]+time[3]);
      if (year < 21){
        year += 2000;
      } else {
        year += 1900;
      }
      appendItem(yearArr,year);
      /*
      if(((getNumber("xTLInput" + r)*16)+138) < 0){
      setPosition("time"+r,0,(getNumber("yTLInput" + r)*-16)+203);
            } else if(((getNumber("xTLInput" + r)*16)+138) + (time.length*7.5) > 320){
      setPosition("time"+r,((getNumber("xTLInput" + r)*16)+138)-(((getNumber("xTLInput" + r)*16)+138) + (name.length*7.5) - 320),(getNumber("yInput" + r)*-16)+203);
      } else {
      setPosition("time"+r,(getNumber("xTLInput" + r)*16)+138,(getNumber("yTLInput" + r)*-16)+203);
      }
      setText("time"+r,name);
      */
      appendItem(xPosArr,xTLPosition);
      appendItem(yPosArr,yTLPosition);
      r++;
    }
    console.log(xPosArr);
    console.log(yPosArr);
    console.log(monthArr);
    console.log(yearArr);
    setPosition("dot2",xPosArr[0],yPosArr[0]);
    var j = monthArr[0];
    var currEntry = 0;
    var currX = 0;
    var currY = 0;
    for(var i = 0; i < (yearArr[yearArr.length-1]-yearArr[0]); i++){
    var endMonth = 13;
    var currYear = yearArr[0]+i;
    while(j < endMonth){
        if(yearArr.indexOf(currYear) != -1){
          currEntry = yearArr.indexOf(currYear);
        } else {
          while(yearArr.indexOf(currYear) == -1){
            currYear--;
          }
          currEntry = yearArr.indexOf(currYear);
        }
        if(currEntry != yearArr.length-1){
          if(yearArr[currEntry] != yearArr[currEntry+1]){
            currX = getXPosition("dot2") + (xPosArr[currEntry+1]-xPosArr[currEntry])/(12-monthArr[currEntry]+monthArr[currEntry+1]+((yearArr[currEntry+1]-yearArr[currEntry]-1)*12));
            currY = getYPosition("dot2") + (yPosArr[currEntry+1]-yPosArr[currEntry])/(12-monthArr[currEntry]+monthArr[currEntry+1]+((yearArr[currEntry+1]-yearArr[currEntry]-1)*12));
          } else {
            currX = getXPosition("dot2") + (xPosArr[currEntry+1]-xPosArr[currEntry])/(monthArr[currEntry+1]-monthArr[currEntry]);
            currY = getYPosition("dot2") + (yPosArr[currEntry+1]-yPosArr[currEntry])/(monthArr[currEntry+1]-monthArr[currEntry]);
          }
        } else {
          currX = xPosArr[currEntry];
          currY = yPosArr[currEntry];
        }
        setPosition("dot2",currX,currY);
        console.log("position updated");
        if(i == (yearArr[0]-yearArr[yearArr.length-1])-1){
          endMonth = monthArr[monthArr.length-1];
        }
      j++;
    }
    j = 0;
    }
    
}
/*
function showCandidates(){
  for (var p = 0; p < 11; p++) {
    showElement("can" + p);
  }
}
function hideCandidates(){
  for (var q = 0; q < 11; q++) {
    hideElement("can" + q);
  }
}
*/
createList();
order();
onEvent("button1","click",function(){
  setScreen("gameScreen");
  setStyle("numline", "z-index: -10");
  showElement("button6");
  hide();
  penUp();
  moveTo(0,-3);
  penDown();
  penWidth(15);
  penColor("white");
  turnRight();
  nextQuestion();

});
onEvent("slider1","change",function(){
  moveForward(5);
  insertItem(ans,0,getNumber("slider1"));
  nextQuestion();

  
});
onEvent("slider2","change",function(){
  moveForward(5);
  insertItem(ans,1,getNumber("slider2"));
  nextQuestion();
  
});
onEvent("slider3","change",function(){
  moveForward(5);
  insertItem(ans,2,getNumber("slider3"));
  nextQuestion();
  
});
onEvent("slider4","change",function(){
  moveForward(5);
  insertItem(ans,3,getNumber("slider4"));
  nextQuestion();
  });
onEvent("slider5","change",function(){
  moveForward(5);
  insertItem(ans,4,getNumber("slider5"));
  nextQuestion();
  });
onEvent("slider6","change",function(){
  moveForward(5);
  insertItem(ans,5,getNumber("slider6"));
  nextQuestion();
  });
onEvent("slider7","change",function(){
  moveForward(5);
  insertItem(ans,6,getNumber("slider7"));
  nextQuestion();
  });
onEvent("slider8","change",function(){
  moveForward(5);
  insertItem(ans,7,getNumber("slider8"));
  nextQuestion();
  });
onEvent("slider9","change",function(){
  moveForward(5);
  insertItem(ans,8,getNumber("slider9"));
  nextQuestion();
  
});
onEvent("slider10","change",function(){
  moveForward(5);
  insertItem(ans,9,getNumber("slider10"));
  nextQuestion();
  
});
onEvent("slider11","change",function(){
  moveForward(5);
  insertItem(ans,10,getNumber("slider11"));
  nextQuestion();
  
});
onEvent("slider12","change",function(){
  moveForward(5);
  insertItem(ans,11,getNumber("slider12"));
  nextQuestion();
  
});
onEvent("slider13","change",function(){
  moveForward(5);
  insertItem(ans,12,getNumber("slider13"));
  nextQuestion();
  
});
onEvent("slider14","change",function(){
  moveForward(5);
  insertItem(ans,13,getNumber("slider14"));
  nextQuestion();
  
});
onEvent("slider15","change",function(){
  moveForward(5);
  insertItem(ans,14,getNumber("slider15"));
  nextQuestion();
  });
onEvent("slider16","change",function(){
  moveForward(5);
  insertItem(ans,15,getNumber("slider16"));
  nextQuestion();
  
});
onEvent("slider17","change",function(){
  moveForward(5);
  insertItem(ans,16,getNumber("slider17"));
  nextQuestion();
  
});
onEvent("slider18","change",function(){
  moveForward(5);
  insertItem(ans,17,getNumber("slider18"));
  nextQuestion();
  
});
onEvent("slider19","change",function(){
  moveForward(5);
  insertItem(ans,18,getNumber("slider19"));
  nextQuestion();
  
});
onEvent("slider20","change",function(){
  moveForward(5);
  insertItem(ans,19,getNumber("slider20"));
  nextQuestion();
  
});
onEvent("slider21","change",function(){
  moveForward(5);
  insertItem(ans,20,getNumber("slider21"));
  nextQuestion();
  
});
onEvent("slider22","change",function(){
  moveForward(5);
  insertItem(ans,21,getNumber("slider22"));
  nextQuestion();
  
});
onEvent("slider23","change",function(){
  moveForward(5);
  insertItem(ans,22,getNumber("slider23"));
  nextQuestion();
  
});
onEvent("slider24","change",function(){
  moveForward(5);
  insertItem(ans,23,getNumber("slider24"));
  nextQuestion();
  
});
onEvent("slider25","change",function(){
  moveForward(5);
  insertItem(ans,24,getNumber("slider25"));
  nextQuestion();
  
});
onEvent("slider26","change",function(){
  moveForward(5);
  insertItem(ans,25,getNumber("slider26"));
  nextQuestion();
  
});
onEvent("slider27","change",function(){
  moveForward(5);
  insertItem(ans,26,getNumber("slider27"));
  nextQuestion();
  
});
onEvent("slider28","change",function(){
  moveForward(5);
  insertItem(ans,27,getNumber("slider28"));
  nextQuestion();
  
});
onEvent("slider29","change",function(){
  moveForward(5);
  insertItem(ans,28,getNumber("slider29"));
  nextQuestion();
  
});
onEvent("slider30","change",function(){
  moveForward(5);
  insertItem(ans,29,getNumber("slider30"));
  nextQuestion();
  
});
onEvent("slider31","change",function(){
  moveForward(5);
  insertItem(ans,30,getNumber("slider31"));
  nextQuestion();
  
});
onEvent("slider32","change",function(){
  moveForward(5);
  insertItem(ans,31,getNumber("slider32"));
  nextQuestion();
  
});
onEvent("slider33","change",function(){
  moveForward(5);
  insertItem(ans,32,getNumber("slider33"));
  nextQuestion();
  
});
onEvent("slider34","change",function(){
  moveForward(5);
  insertItem(ans,33,getNumber("slider34"));
  nextQuestion();
  
});
onEvent("slider35","change",function(){
  moveForward(5);
  insertItem(ans,34,getNumber("slider35"));
  nextQuestion();
  
});
onEvent("slider36","change",function(){
  moveForward(5);
  insertItem(ans,35,getNumber("slider36"));
  nextQuestion();
  
});
onEvent("slider37","change",function(){
  moveForward(5);
  insertItem(ans,36,getNumber("slider37"));
  nextQuestion();
  
});
onEvent("slider38","change",function(){
  moveForward(5);
  insertItem(ans,37,getNumber("slider38"));
  nextQuestion();
  
});
onEvent("slider39","change",function(){
  moveForward(5);
  insertItem(ans,38,getNumber("slider39"));
  nextQuestion();
  
});
onEvent("slider40","change",function(){
  moveForward(5);
  insertItem(ans,39,getNumber("slider40"));
  nextQuestion();
  
});
onEvent("slider41","change",function(){
  moveForward(5);
  insertItem(ans,40,getNumber("slider41"));
  nextQuestion();
  
});
onEvent("slider42","change",function(){
  moveForward(5);
  insertItem(ans,41,getNumber("slider42"));
  nextQuestion();
  
});
onEvent("slider43","change",function(){
  moveForward(5);
  insertItem(ans,42,getNumber("slider43"));
  nextQuestion();
  
});
onEvent("slider44","change",function(){
  moveForward(5);
  insertItem(ans,43,getNumber("slider44"));
  nextQuestion();
  
});
onEvent("slider45","change",function(){
  moveForward(5);
  insertItem(ans,44,getNumber("slider45"));
  nextQuestion();
  
});
onEvent("slider46","change",function(){
  moveForward(5);
  insertItem(ans,45,getNumber("slider46"));
  nextQuestion();
  
});
onEvent("slider47","change",function(){
  moveForward(5);
  insertItem(ans,46,getNumber("slider47"));
  nextQuestion();
  
});
onEvent("slider48","change",function(){
  moveForward(5);
  insertItem(ans,47,getNumber("slider48"));
  nextQuestion();
  
});
onEvent("slider49","change",function(){
  moveForward(5);
  insertItem(ans,48,getNumber("slider49"));
  nextQuestion();
  
});
onEvent("slider50","change",function(){
  moveForward(5);
  insertItem(ans,49,getNumber("slider50"));
  nextQuestion();
  
});
onEvent("slider51","change",function(){
  moveForward(5);
  insertItem(ans,50,getNumber("slider51"));
  nextQuestion();
  
});
onEvent("slider52","change",function(){
  moveForward(5);
  insertItem(ans,51,getNumber("slider52"));
  nextQuestion();
  
});
onEvent("slider53","change",function(){
  moveForward(5);
  insertItem(ans,52,getNumber("slider53"));
  nextQuestion();
  
});
onEvent("slider54","change",function(){
  moveForward(5);
  insertItem(ans,53,getNumber("slider54"));
  nextQuestion();
  
});
onEvent("slider55","change",function(){
  moveForward(5);
  insertItem(ans,54,getNumber("slider55"));
  nextQuestion();
  
});
onEvent("slider56","change",function(){
  moveForward(5);
  insertItem(ans,55,getNumber("slider56"));
  nextQuestion();
  
});
onEvent("slider57","change",function(){
  moveForward(5);
  insertItem(ans,56,getNumber("slider57"));
  nextQuestion();
  
});
onEvent("slider58","change",function(){
  moveForward(5);
  insertItem(ans,57,getNumber("slider58"));
  nextQuestion();
  
});
onEvent("slider59","change",function(){
  moveForward(5);
  insertItem(ans,58,getNumber("slider59"));
  nextQuestion();
  
});
onEvent("slider60","change",function(){
  moveForward(5);
  insertItem(ans,59,getNumber("slider60"));
  nextQuestion();
  
});
onEvent("slider61","change",function(){
  moveForward(5);
  insertItem(ans,60,getNumber("slider61"));
  nextQuestion();
  
});
onEvent("slider62","change",function(){
  moveForward(5);
  insertItem(ans,61,getNumber("slider62"));
  nextQuestion();
  
});
onEvent("slider63","change",function(){
  moveForward(5);
  insertItem(ans,62,getNumber("slider63"));
  nextQuestion();
  
});
onEvent("slider64","change",function(){
  moveForward(5);
  insertItem(ans,63,getNumber("slider64"));
  showElement("button2");
  hideElement("slider64");
  });
onEvent("button2","click",function(){
  calculatePfpPlacement();
  hidePfps();
  calculateIdDistances();
  console.log(sortedIdNames);
  setScreen("testResults");
  setStyle("dot", "z-index: 10");
  hide();
  endTest();
});
onEvent("button4", "click", function(){
  showElement("percent7");
  showElement("percent8");
  showElement("percent9");
  showElement("label43");
  showElement("label44");
  showElement("label45");
  showElement("username7");
  showElement("username8");
  showElement("username9");
  setText("text_area65","Results also consider z coordinates. \n Usernames will take you to their page.");
  calculatePfpDistances();
  setScreen("testResults2");
  displayPfpMatches();
  distance;
  distances = [];
  maxDistance;
  maxIndex;
  sortedDistances = [];
  usernames = ["teen.politics.official","charlemagnes_corner","seize_the_memes","batkoschizo","progressive.politico","feldsteinphilosophy","the_southern_leftist","tread.not","teen.politics.official","social_liberals","max_stirner_fanpage_v2","old.right","deafpatriot","angry.americans","libertylover2","refoundingfather","anarchist.punk","broken.bones.and.civilizations","kiwimutualist","anpacball","individualist.libertarian","reactionary.movement.v5","right_wing_imperial","anarchistunity","socialista.tejana","liberallibertarian","visionary.arabia","social.dem.official","palmetto_state_bluedog","pizza.minuteman","lippie4solidarity","massachusite","lib_confederalism","soc.leftist","2038_movement","american.edgelord.v2","union.inter","proudly.we.hail","anarcho.garfieldism","anarchy.is.liberty","ancap_or_death","ancap_society","the.eco.socialist","biblicalamericanpolitics","campus_conservative_","cristero.mexico","cuban.progressive","demsocialistcolony","identityeurope","tiitoist","libertiansocialist.sf","majortomrade","marxist_luxemburgist","mexicanlibertarian","mister.american","historical._.meme","not_a_domestic_terrorist","refoundingfather","shoe0nhead","the.geopolitical.forecaster","anarquistamexicano","toronto_socialist","trotskium","wokerevolution","realisticleftist","leftistcommentary","mass_liberty","american_nationalist.party","new.libertarianism","missourian_ancaps","art.n.politics.v3","unorthodox.anarchist","soviet.chronicles_.v15","politicrab","leftistperspective","cyberjeetism","therightstats","immortal_leninism","american_coalition_v2","im_literally_melody","deep.fried.tyrannicide","genz.politics","kashmarxi","let_me_barter_btch","libertarian_atheist_","marxist_horizons","pennsylvania_progressive","bahamasball","unionizethehomeless","independent.american","comrade_sacha","possumtwostillpossumin","american.marxist","proletarian.flame","redneck.anarchist","thelaurenchen","puppers.against.capitalism","anarcho_bidenism_action","the.decadent.socialist2","sees.the.memes"];
  pfpXCoord = 0;
  pfpYCoord = 0;
  pfpZCoord = 0;
  count = 0;
});
onEvent("button19", "click", function(){
  hideElement("percent7");
  hideElement("percent8");
  hideElement("percent9");
  hideElement("label43");
  hideElement("label44");
  hideElement("label45");
  hideElement("username7");
  hideElement("username8");
  hideElement("username9");
  setText("text_area65","Results also consider z coordinates.");
  calculateCandidateDistances();
  setScreen("testResults2");
  displayCandidateMatches();
  canDistance;
  canDistances = [];
  maxCanDistance;
  maxCanIndex;
  sortedCanDistances = [];
  canNames = ["M. Williamson","Cornel West","Joe Biden","Chris Christie","Mike Pence","Ron Desantis","Donald Trump"];                            
  count = 0;
});
onEvent("button5", "click", function(){
  setScreen("testResults");
  if(count == 0){
    sortedUsernames = [];
    sortedCanNames = [];
  }
});
onEvent("radio_button1","click",function(){
  showElement("symbols");
  hideElement("images");
  hideElement("slider65");
  hidePfps();
  hideElement("dp");
  hideElement("bar2");
  showElement("idLabel");
  hideElement("button17");
  hideElement("image3");
  hideElement("button4");
  hideElement("button19");
  showElement("label6");
});
onEvent("radio_button2","click",function(){
  showElement("images");
  hideElement("symbols");
  hideElement("slider65");
  hidePfps();
  hideElement("dp");
  hideElement("bar2");
  showElement("idLabel");
  hideElement("button17");
  hideElement("image3");
  hideElement("button4");
  hideElement("button19");
  showElement("label6");
});
onEvent("radio_button5","click",function(){
  hideElement("images");
  hideElement("symbols");
  showPfps();
  showElement("slider65");
  hideElement("dp");
  showElement("button17");
  hideElement("idLabel");
  hideElement("image3");
  showElement("button4");
  hideElement("button19");
  hideElement("label6");
});
onEvent("radio_button3","click",function(){
  hideElement("button4");
  hideElement("images");
  hideElement("symbols");
  hideElement("slider65");
  hidePfps();
  showElement("dp");
  hideElement("bar2");
  showElement("idLabel");
  hideElement("button17");
  hideElement("image3");
  hideElement("button19");
  showElement("label6");
});
onEvent("radio_button4","click",function(){
  hideElement("images");
  hideElement("symbols");
  hideElement("slider65");
  hidePfps();
  showElement("image3");
  showElement("button19");
  hideElement("dp");
  hideElement("bar2");
  hideElement("idLabel");
  hideElement("button17");
  hideElement("button4");
  hideElement("label6");
});
onEvent("radio_button6","click",function(){
  showElement("symbols2");
  hideElement("images2");
  hideElement("text2");
  hideElement("dp");

});
onEvent("radio_button7","click",function(){
  hideElement("symbols2");
  showElement("images2");
  hideElement("text2");
  hideElement("dp");
 
});
onEvent("radio_button8","click",function(){
  hideElement("symbols2");
  hideElement("images2");
  showElement("text2");
  hideElement("dp");
  
});
onEvent("radio_button9","click",function(){
  hideElement("symbols2");
  hideElement("images2");
  hideElement("text2");
  hideElement("dp");
  
});
onEvent("username0","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[0] + "/");
  }
});
onEvent("username1","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[1] + "/");
  }
});
onEvent("username2","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[2] + "/");
  }
});
onEvent("username3","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[3] + "/");
  }
});
onEvent("username4","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[4] + "/");
  }
});
onEvent("username5","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[5] + "/");
  }
});
onEvent("username6","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[6] + "/");
  }
});
onEvent("username7","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[7] + "/");
  }
});
onEvent("username8","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[8] + "/");
  }
});
onEvent("username9","click",function(){
  if(count == 0){
    open("https://www.instagram.com/" + sortedUsernames[9] + "/");
  }
});

for (var i = 0; i < 101; i++) {
 setStyle("pfp" + i, "border-radius: 25px;");
 setStyle("pfp" + i, "border-width: 2px;"); 
}


onEvent("pfp0","click",function(){
  setText("text_area67",usernames[0] + "'s results: (" + xCoords[0] + "," + yCoords[0] + "," + zCoords[0] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp0","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[0]*16+160,364);
});
onEvent("pfp1","click",function(){
  setText("text_area67",usernames[1] + "'s results: (" + xCoords[1] + "," + yCoords[1] + "," + zCoords[1] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp1","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[1]*16+160,364);
});
onEvent("pfp2","click",function(){
  setText("text_area67",usernames[2] + "'s results: (" + xCoords[2] + "," + yCoords[2] + "," + zCoords[2] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp2","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[2]*16+160,364);
});
onEvent("pfp3","click",function(){
  setText("text_area67",usernames[3] + "'s results: (" + xCoords[3] + "," + yCoords[3] + "," + zCoords[3] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp3","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[3]*16+160,364);
});
onEvent("pfp4","click",function(){
  setText("text_area67",usernames[4] + "'s results: (" + xCoords[4] + "," + yCoords[4] + "," + zCoords[4] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp4","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[4]*16+160,364);
});
onEvent("pfp5","click",function(){
  setText("text_area67",usernames[5] + "'s results: (" + xCoords[5] + "," + yCoords[5] + "," + zCoords[5] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp5","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[5]*16+160,364);
});
onEvent("pfp6","click",function(){
  setText("text_area67",usernames[6] + "'s results: (" + xCoords[6] + "," + yCoords[6] + "," + zCoords[6] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp6","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[6]*16+160,364);
});
onEvent("pfp7","click",function(){
  setText("text_area67",usernames[7] + "'s results: (" + xCoords[7] + "," + yCoords[7] + "," + zCoords[7] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp7","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[7]*16+160,364);
});
onEvent("pfp8","click",function(){
  setText("text_area67",usernames[8] + "'s results: (" + xCoords[8] + "," + yCoords[8] + "," + zCoords[8] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp8","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[8]*16+160,364);
});
onEvent("pfp9","click",function(){
  setText("text_area67",usernames[9] + "'s results: (" + xCoords[9] + "," + yCoords[9] + "," + zCoords[9] + ")" + "\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord+")");
  setStyle("pfp9","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[9]*16+160,364);
});
onEvent("pfp10","click",function(){
  setText("text_area67", usernames[10] + "'s results: (" + xCoords[10] + "," + yCoords[10] + "," + zCoords[10] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp10","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[10]*16+160,364);
});
onEvent("pfp11","click",function(){
  setText("text_area67", usernames[11] + "'s results: (" + xCoords[11] + "," + yCoords[11] + "," + zCoords[11] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp11","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[11]*16+160,364);
});
onEvent("pfp12","click",function(){
  setText("text_area67", usernames[12] + "'s results: (" + xCoords[12] + "," + yCoords[12] + "," + zCoords[12] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp12","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[12]*16+160,364);
});
onEvent("pfp13","click",function(){
  setText("text_area67", usernames[13] + "'s results: (" + xCoords[13] + "," + yCoords[13] + "," + zCoords[13] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp13","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[13]*16+160,364);
});
onEvent("pfp14","click",function(){
  setText("text_area67", usernames[14] + "'s results: (" + xCoords[14] + "," + yCoords[14] + "," + zCoords[14] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp14","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[14]*16+160,364);
});
onEvent("pfp15","click",function(){
  setText("text_area67", usernames[15] + "'s results: (" + xCoords[15] + "," + yCoords[15] + "," + zCoords[15] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp15","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[15]*16+160,364);
});
onEvent("pfp16","click",function(){
  setText("text_area67", usernames[16] + "'s results: (" + xCoords[16] + "," + yCoords[16] + "," + zCoords[16] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp16","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[16]*16+160,364);
});
onEvent("pfp17","click",function(){
  setText("text_area67", usernames[17] + "'s results: (" + xCoords[17] + "," + yCoords[17] + "," + zCoords[17] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp17","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[17]*16+160,364);
});
onEvent("pfp18","click",function(){
  setText("text_area67", usernames[18] + "'s results: (" + xCoords[18] + "," + yCoords[18] + "," + zCoords[18] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp18","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[18]*16+160,364);
});
onEvent("pfp19","click",function(){
  setText("text_area67", usernames[19] + "'s results: (" + xCoords[19] + "," + yCoords[19] + "," + zCoords[19] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp19","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[19]*16+160,364);
});
onEvent("pfp20","click",function(){
  setText("text_area67", usernames[20] + "'s results: (" + xCoords[20] + "," + yCoords[20] + "," + zCoords[20] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp20","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[20]*16+160,364);
});
onEvent("pfp21","click",function(){
  setText("text_area67", usernames[21] + "'s results: (" + xCoords[21] + "," + yCoords[21] + "," + zCoords[21] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp21","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[21]*16+160,364);
});
onEvent("pfp22","click",function(){
  setText("text_area67", usernames[22] + "'s results: (" + xCoords[22] + "," + yCoords[22] + "," + zCoords[22] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp22","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[22]*16+160,364);
});
onEvent("pfp23","click",function(){
  setText("text_area67", usernames[23] + "'s results: (" + xCoords[23] + "," + yCoords[23] + "," + zCoords[23] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp23","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[23]*16+160,364);
});
onEvent("pfp24","click",function(){
  setText("text_area67", usernames[24] + "'s results: (" + xCoords[24] + "," + yCoords[24] + "," + zCoords[24] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp24","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[24]*16+160,364);
});
onEvent("pfp25","click",function(){
  setText("text_area67", usernames[25] + "'s results: (" + xCoords[25] + "," + yCoords[25] + "," + zCoords[25] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp25","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[25]*16+160,364);
});
onEvent("pfp26","click",function(){
  setText("text_area67", usernames[26] + "'s results: (" + xCoords[26] + "," + yCoords[26] + "," + zCoords[26] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp26","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[26]*16+160,364);
});
onEvent("pfp27","click",function(){
  setText("text_area67", usernames[27] + "'s results: (" + xCoords[27] + "," + yCoords[27] + "," + zCoords[27] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp27","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[27]*16+160,364);
});
onEvent("pfp28","click",function(){
  setText("text_area67", usernames[28] + "'s results: (" + xCoords[28] + "," + yCoords[28] + "," + zCoords[28] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp28","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[28]*16+160,364);
});
onEvent("pfp29","click",function(){
  setText("text_area67", usernames[29] + "'s results: (" + xCoords[29] + "," + yCoords[29] + "," + zCoords[29] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp29","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[29]*16+160,364);
});
onEvent("pfp30","click",function(){
  setText("text_area67", usernames[30] + "'s results: (" + xCoords[30] + "," + yCoords[30] + "," + zCoords[30] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp30","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[30]*16+160,364);
});
onEvent("pfp31","click",function(){
  setText("text_area67", usernames[31] + "'s results: (" + xCoords[31] + "," + yCoords[31] + "," + zCoords[31] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp31","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[31]*16+160,364);
});
onEvent("pfp32","click",function(){
  setText("text_area67", usernames[32] + "'s results: (" + xCoords[32] + "," + yCoords[32] + "," + zCoords[32] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp32","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[32]*16+160,364);
});
onEvent("pfp33","click",function(){
  setText("text_area67", usernames[33] + "'s results: (" + xCoords[33] + "," + yCoords[33] + "," + zCoords[31] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp33","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[33]*16+160,364);
});
onEvent("pfp34","click",function(){
  setText("text_area67", usernames[34] + "'s results: (" + xCoords[34] + "," + yCoords[34] + "," + zCoords[34] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp34","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[34]*16+160,364);
});
onEvent("pfp35","click",function(){
  setText("text_area67", usernames[35] + "'s results: (" + xCoords[35] + "," + yCoords[35] + "," + zCoords[35] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp35","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[35]*16+160,364);
});
onEvent("pfp36","click",function(){
  setText("text_area67", usernames[36] + "'s results: (" + xCoords[36] + "," + yCoords[36] + "," + zCoords[36] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp36","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[36]*16+160,364);
});
onEvent("pfp37","click",function(){
  setText("text_area67", usernames[37] + "'s results: (" + xCoords[37] + "," + yCoords[37] + "," + zCoords[37] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp37","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[37]*16+160,364);
});
onEvent("pfp38","click",function(){
  setText("text_area67", usernames[38] + "'s results: (" + xCoords[38] + "," + yCoords[38] + "," + zCoords[38] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp38","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[38]*16+160,364);
});
onEvent("pfp39","click",function(){
  setText("text_area67", usernames[39] + "'s results: (" + xCoords[39] + "," + yCoords[39] + "," + zCoords[39] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp39","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[39]*16+160,364);
});
onEvent("pfp40","click",function(){
  setText("text_area67", usernames[40] + "'s results: (" + xCoords[40] + "," + yCoords[40] + "," + zCoords[40] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp40","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[40]*16+160,364);
});
onEvent("pfp41","click",function(){
  setText("text_area67", usernames[41] + "'s results: (" + xCoords[41] + "," + yCoords[41] + "," + zCoords[41] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp41","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[41]*16+160,364);
});
onEvent("pfp42","click",function(){
  setText("text_area67", usernames[42] + "'s results: (" + xCoords[42] + "," + yCoords[42] + "," + zCoords[42] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp42","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[42]*16+160,364);
});
onEvent("pfp43","click",function(){
  setText("text_area67", usernames[43] + "'s results: (" + xCoords[43] + "," + yCoords[43] + "," + zCoords[43] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp43","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[43]*16+160,364);
});
onEvent("pfp44","click",function(){
  setText("text_area67", usernames[44] + "'s results: (" + xCoords[44] + "," + yCoords[44] + "," + zCoords[44] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp44","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[44]*16+160,364);
});
onEvent("pfp45","click",function(){
  setText("text_area67", usernames[45] + "'s results: (" + xCoords[45] + "," + yCoords[45] + "," + zCoords[45] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp45","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[45]*16+160,364);
});
onEvent("pfp46","click",function(){
  setText("text_area67", usernames[46] + "'s results: (" + xCoords[46] + "," + yCoords[46] + "," + zCoords[46] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp46","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[46]*16+160,364);
});
onEvent("pfp47","click",function(){
  setText("text_area67", usernames[47] + "'s results: (" + xCoords[47] + "," + yCoords[47] + "," + zCoords[47] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp47","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[47]*16+160,364);
});
onEvent("pfp48","click",function(){
  setText("text_area67", usernames[48] + "'s results: (" + xCoords[48] + "," + yCoords[48] + "," + zCoords[48] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp48","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[48]*16+160,364);
});
onEvent("pfp49","click",function(){
  setText("text_area67", usernames[49] + "'s results: (" + xCoords[49] + "," + yCoords[49] + "," + zCoords[49] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp49","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[49]*16+160,364);
});
onEvent("pfp50","click",function(){
  setText("text_area67", usernames[50] + "'s results: (" + xCoords[50] + "," + yCoords[50] + "," + zCoords[50] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp50","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[50]*16+160,364);
});
onEvent("pfp51","click",function(){
  setText("text_area67", usernames[51] + "'s results: (" + xCoords[51] + "," + yCoords[51] + "," + zCoords[51] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp51","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[51]*16+160,364);
});
onEvent("pfp52","click",function(){
  setText("text_area67", usernames[52] + "'s results: (" + xCoords[52] + "," + yCoords[52] + "," + zCoords[52] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp52","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[52]*16+160,364);
});
onEvent("pfp53","click",function(){
  setText("text_area67", usernames[53] + "'s results: (" + xCoords[53] + "," + yCoords[53] + "," + zCoords[53] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp53","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[53]*16+160,364);
});

onEvent("pfp54","click",function(){
  setText("text_area67", usernames[54] + "'s results: (" + xCoords[54] + "," + yCoords[54] + "," + zCoords[54] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp54","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[54]*16+160,364);
});
onEvent("pfp55","click",function(){
  setText("text_area67", usernames[55] + "'s results: (" + xCoords[55] + "," + yCoords[55] + "," + zCoords[55] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp55","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[55]*16+160,364);
});
onEvent("pfp56","click",function(){
  setText("text_area67", usernames[56] + "'s results: (" + xCoords[56] + "," + yCoords[56] + "," + zCoords[56] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp56","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[56]*16+160,364);
});
onEvent("pfp57","click",function(){
  setText("text_area67", usernames[57] + "'s results: (" + xCoords[57] + "," + yCoords[57] + "," + zCoords[57] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp57","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[57]*16+160,364);
});
onEvent("pfp58","click",function(){
  setText("text_area67", usernames[58] + "'s results: (" + xCoords[58] + "," + yCoords[58] + "," + zCoords[58] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp58","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[58]*16+160,364);
});
onEvent("pfp59","click",function(){
  setText("text_area67", usernames[59] + "'s results: (" + xCoords[59] + "," + yCoords[59] + "," + zCoords[59] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp59","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[59]*16+160,364);
});
onEvent("pfp60","click",function(){
  setText("text_area67", usernames[60] + "'s results: (" + xCoords[60] + "," + yCoords[60] + "," + zCoords[60] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp60","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[60]*16+160,364);
});
onEvent("pfp61","click",function(){
  setText("text_area67", usernames[61] + "'s results: (" + xCoords[61] + "," + yCoords[61] + "," + zCoords[61] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp1","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[61]*16+160,364);
});
onEvent("pfp62","click",function(){
  setText("text_area67", usernames[62] + "'s results: (" + xCoords[62] + "," + yCoords[62] + "," + zCoords[62] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp62","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[62]*16+160,364);
});
onEvent("pfp63","click",function(){
  setText("text_area67", usernames[63] + "'s results: (" + xCoords[63] + "," + yCoords[63] + "," + zCoords[63] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp63","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[63]*16+160,364);
});
onEvent("pfp64","click",function(){
  setText("text_area67", usernames[64] + "'s results: (" + xCoords[64] + "," + yCoords[64] + "," + zCoords[64] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp64","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[64]*16+160,364);
});
onEvent("pfp65","click",function(){
  setText("text_area67", usernames[65] + "'s results: (" + xCoords[65] + "," + yCoords[65] + "," + zCoords[65] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp65","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[65]*16+160,364);
});
onEvent("pfp66","click",function(){
  setText("text_area67", usernames[66] + "'s results: (" + xCoords[66] + "," + yCoords[66] + "," + zCoords[66] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp66","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[66]*16+160,364);
});
onEvent("pfp67","click",function(){
  setText("text_area67", usernames[67] + "'s results: (" + xCoords[67] + "," + yCoords[67] + "," + zCoords[67] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp67","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[67]*16+160,364);
});
onEvent("pfp68","click",function(){
  setText("text_area67", usernames[68] + "'s results: (" + xCoords[68] + "," + yCoords[68] + "," + zCoords[68] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp68","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[68]*16+160,364);
});
onEvent("pfp69","click",function(){
  setText("text_area67", usernames[69] + "'s results: (" + xCoords[69] + "," + yCoords[69] + "," + zCoords[69] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp69","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[69]*16+160,364);
});
onEvent("pfp70","click",function(){
  setText("text_area67", usernames[70] + "'s results: (" + xCoords[70] + "," + yCoords[70] + "," + zCoords[70] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp70","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[70]*16+160,364);
});
onEvent("pfp71","click",function(){
  setText("text_area67", usernames[71] + "'s results: (" + xCoords[71] + "," + yCoords[71] + "," + zCoords[71] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp71","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[71]*16+160,364);
});
onEvent("pfp72","click",function(){
  setText("text_area67", usernames[72] + "'s results: (" + xCoords[72] + "," + yCoords[72] + "," + zCoords[72] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp72","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[72]*16+160,364);
});
onEvent("pfp73","click",function(){
  setText("text_area67", usernames[73] + "'s results: (" + xCoords[73] + "," + yCoords[73] + "," + zCoords[73] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp73","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[73]*16+160,364);
});
onEvent("pfp74","click",function(){
  setText("text_area67", usernames[74] + "'s results: (" + xCoords[74] + "," + yCoords[74] + "," + zCoords[74] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp74","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[74]*16+160,364);
});
onEvent("pfp75","click",function(){
  setText("text_area67", usernames[75] + "'s results: (" + xCoords[75] + "," + yCoords[75] + "," + zCoords[75] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp75","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[75]*16+160,364);
});
onEvent("pfp76","click",function(){
  setText("text_area67", usernames[76] + "'s results: (" + xCoords[76] + "," + yCoords[76] + "," + zCoords[76] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp76","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[76]*16+160,364);
});
onEvent("pfp77","click",function(){
  setText("text_area67", usernames[77] + "'s results: (" + xCoords[77] + "," + yCoords[77] + "," + zCoords[77] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp77","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[77]*16+160,364);
});
onEvent("pfp78","click",function(){
  setText("text_area67", usernames[78] + "'s results: (" + xCoords[78] + "," + yCoords[78] + "," + zCoords[78] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp78","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[78]*16+160,364);
});
onEvent("pfp79","click",function(){
  setText("text_area67", usernames[79] + "'s results: (" + xCoords[79] + "," + yCoords[79] + "," + zCoords[79] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp79","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[79]*16+160,364);
});
onEvent("pfp80","click",function(){
  setText("text_area67", usernames[80] + "'s results: (" + xCoords[80] + "," + yCoords[80] + "," + zCoords[80] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp80","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[80]*16+160,364);
});
onEvent("pfp81","click",function(){
  setText("text_area67", usernames[81] + "'s results: (" + xCoords[81] + "," + yCoords[81] + "," + zCoords[81] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp81","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[81]*16+160,364);
});
onEvent("pfp82","click",function(){
  setText("text_area67", usernames[82] + "'s results: (" + xCoords[82] + "," + yCoords[82] + "," + zCoords[82] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp82","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[82]*16+160,364);
});
onEvent("pfp83","click",function(){
  setText("text_area67", usernames[83] + "'s results: (" + xCoords[83] + "," + yCoords[83] + "," + zCoords[83] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp83","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[83]*16+160,364);
});
onEvent("pfp84","click",function(){
  setText("text_area67", usernames[84] + "'s results: (" + xCoords[84] + "," + yCoords[84] + "," + zCoords[84] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp84","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[84]*16+160,364);
});
onEvent("pfp85","click",function(){
  setText("text_area67", usernames[85] + "'s results: (" + xCoords[85] + "," + yCoords[85] + "," + zCoords[85] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp85","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[85]*16+160,364);
});
onEvent("pfp86","click",function(){
  setText("text_area67", usernames[86] + "'s results: (" + xCoords[86] + "," + yCoords[86] + "," + zCoords[86] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp86","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[86]*16+160,364);
});
onEvent("pfp87","click",function(){
  setText("text_area67", usernames[87] + "'s results: (" + xCoords[87] + "," + yCoords[87] + "," + zCoords[87] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp87","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[87]*16+160,364);
});
onEvent("pfp88","click",function(){
  setText("text_area67", usernames[88] + "'s results: (" + xCoords[88] + "," + yCoords[88] + "," + zCoords[88] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp88","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[88]*16+160,364);
});
onEvent("pfp89","click",function(){
  setText("text_area67", usernames[89] + "'s results: (" + xCoords[89] + "," + yCoords[89] + "," + zCoords[89] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp89","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[89]*16+160,364);
});
onEvent("pfp90","click",function(){
  setText("text_area67", usernames[90] + "'s results: (" + xCoords[90] + "," + yCoords[90] + "," + zCoords[90] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp90","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[90]*16+160,364);
});
onEvent("pfp91","click",function(){
  setText("text_area67", usernames[91] + "'s results: (" + xCoords[91] + "," + yCoords[91] + "," + zCoords[91] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp91","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[91]*16+160,364);
});
onEvent("pfp92","click",function(){
  setText("text_area67", usernames[92] + "'s results: (" + xCoords[92] + "," + yCoords[92] + "," + zCoords[92] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp92","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[92]*16+160,364);
});
onEvent("pfp93","click",function(){
  setText("text_area67", usernames[93] + "'s results: (" + xCoords[93] + "," + yCoords[93] + "," + zCoords[93] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp93","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[93]*16+160,364);
});
onEvent("pfp94","click",function(){
  setText("text_area67", usernames[94] + "'s results: (" + xCoords[94] + "," + yCoords[94] + "," + zCoords[94] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp94","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[94]*16+160,364);
});
onEvent("pfp95","click",function(){
  setText("text_area67", usernames[95] + "'s results: (" + xCoords[95] + "," + yCoords[95] + "," + zCoords[95] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp95","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[95]*16+160,364);
});
onEvent("pfp96","click",function(){
  setText("text_area67", usernames[96] + "'s results: (" + xCoords[96] + "," + yCoords[96] + "," + zCoords[96] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp96","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[96]*16+160,364);
});
onEvent("pfp97","click",function(){
  setText("text_area67", usernames[97] + "'s results: (" + xCoords[97] + "," + yCoords[97] + "," + zCoords[97] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp97","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[97]*16+160,364);
});
onEvent("pfp98","click",function(){
  setText("text_area67", usernames[98] + "'s results: (" + xCoords[98] + "," + yCoords[98] + "," + zCoords[98] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp98","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[98]*16+160,364);
});
onEvent("pfp99","click",function(){
  setText("text_area67", usernames[99] + "'s results: (" + xCoords[99] + "," + yCoords[99] + "," + zCoords[99] + ")\n" + "Your results: (" + xCoord + "," + yCoord + "," + zCoord + ")");
  setStyle("pfp99","z-index: " + depth);
  depth++;
  showElement("bar2");
  setPosition("bar2",zCoords[99]*16+160,364);
});
onEvent("button6","click",function(){
  previousQuestion();
  moveBackward(5);
});
onEvent("button8","click",function(){
  setScreen("buildScreen");
});
onEvent("button10","click",function(){
  open("https://shorturl.at/fhqLQ");
});
onEvent("slider65","input",function(){
  for(var e = 0; e < getProperty("slider65","value"); e++){
    /* appendItem(pfps,pfps[0]); */
    removeItem(pfps,0);
  }
  sort();
  pfps = [];
  createList();
});
onEvent("button12","click",function(){
  checkViability();
  if(viability == 1){
    setScreen("buildResults");
    createCanvas("canvas1");
    preview();
  }
});
onEvent("button13","click",function(){
  clearCanvas();
  setScreen("buildScreen");
});
onEvent("paypal","click",function(){
  open("https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=lippie4solidarity@gmail.com&lc=US&no_note=0&item_name=Help+me+continue+to+make+the+Politigram+Compass+the+only+political+test+specific+to+Politigram+(and+buy+my+college+textbooks)!&cn=&curency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted");
});
onEvent("button9","click",function(){
  clearCanvas();
  setScreen("welcomeScreen");
});
onEvent("button15", "click", function( ) {
	open("https://www.youtube.com/channel/UCAlumeBQWQiEMCI9ydG6gGg");
});
onEvent("button7", "click", function( ) {
	open("https://www.instagram.com/politigram.compass/?hl=en");
});
onEvent("button11", "click", function( ) {
	setScreen("disclaimerScreen");
});
onEvent("button3", "click", function( ) {
	setScreen("welcomeScreen");
});
onEvent("button11", "click", function( ) {
	setScreen("3DresultsScreen");
});
onEvent("button17", "click", function( ) {
	open("https://forms.gle/Q6XVXFZTL57ob8Kz7");
});

