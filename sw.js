/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/07/26/diary/1.jpg","28397a64fb884637caa95528a2fab76a"],["/2022/07/26/diary/10.jpg","c56614382339017c83e7e991e3e806bc"],["/2022/07/26/diary/11.jpg","58e5bcc0e2cf1f0e779920b4fb15c692"],["/2022/07/26/diary/12.jpg","47f9f99a81faf2d7b4dd0adaccb1f8d7"],["/2022/07/26/diary/13.jpg","fece1001f14e8614d1c044d5c8715dc0"],["/2022/07/26/diary/13FD63409D1062C8C634698A5D0E65FD.png","13fd63409d1062c8c634698a5d0e65fd"],["/2022/07/26/diary/14.jpg","8980cb349362c53953cca877d802a3c6"],["/2022/07/26/diary/15.jpg","f27dba03a1da037b29719c7431cef40c"],["/2022/07/26/diary/16.jpg","7e1d1c2f108e7b90bf22b73a35498397"],["/2022/07/26/diary/17.jpg","c53bbe0b8e032e4a187116f5794ced43"],["/2022/07/26/diary/18.jpg","4022ccf345381ab4bb5560b8560faaef"],["/2022/07/26/diary/19.jpg","c4d170b621e2cf12d99b42583150137a"],["/2022/07/26/diary/2.jpg","996c902c99252fd80a06afbf4550bc1a"],["/2022/07/26/diary/20.jpg","c98b978158289c724282204849389498"],["/2022/07/26/diary/21.jpg","76cd13af1cefd6079af5a3ad78cdb0c8"],["/2022/07/26/diary/22.jpg","ca21641f980095397a2931e2b3605644"],["/2022/07/26/diary/23.jpg","d06a1e7d012aa66f80a85566bd8af475"],["/2022/07/26/diary/24.jpg","1a9127139c5e4dd452964bb6e4776b20"],["/2022/07/26/diary/25.jpg","d34beb7561300c8232a7de7292bdf2d4"],["/2022/07/26/diary/26.jpg","d56ce7622d66a0096df0f2f53e5fdf9e"],["/2022/07/26/diary/27.jpg","89defc78d9f5296bbc4cee3510857625"],["/2022/07/26/diary/28.jpg","bd23f333fba588fa575a753fd32b59ff"],["/2022/07/26/diary/29.jpg","1399bfae6ddf6db5588f556eee625848"],["/2022/07/26/diary/3.jpg","6f09585e661c6a0f272ab7541947f4b9"],["/2022/07/26/diary/30.jpg","99ccf81817ba63d58c57ec3148652e56"],["/2022/07/26/diary/31.jpg","04543433656e26b744b7f96c01757338"],["/2022/07/26/diary/32.jpg","f47ff85027031bd2eb8edbd08aa70b3f"],["/2022/07/26/diary/33.jpg","6f8a41c42a74cf1743358d1287fe5a12"],["/2022/07/26/diary/34.jpg","94ff66ebb74ad7db7b0bc0f299d830a6"],["/2022/07/26/diary/35.jpg","7cb24e3f0b57e4694b6849868b92c3e8"],["/2022/07/26/diary/36.jpg","825f066459d975d9ee9748c8ead80748"],["/2022/07/26/diary/37.jpg","067b5d2410154e68ffbd4f431930ae60"],["/2022/07/26/diary/38.jpg","f277933b00b3788eb5d799c89ab84de9"],["/2022/07/26/diary/39.jpg","2c67c5cb68beb1d52f8645437c4ffba5"],["/2022/07/26/diary/4.jpg","048a019ab5eab85448bf3d4e6e7be6d7"],["/2022/07/26/diary/40.jpg","7fbebadfedcd5b959fbf793c6e0fc969"],["/2022/07/26/diary/41.jpg","e6577f48e09abd18d4f351659c8dc5d3"],["/2022/07/26/diary/42.jpg","76edcc9bde9bb5351c81c3b6f4f64fc3"],["/2022/07/26/diary/43.jpg","0099afe116d0b81330686e5b1fa1b7e5"],["/2022/07/26/diary/44.jpg","f1ab200f5a79dd20c5da1f87269f0135"],["/2022/07/26/diary/45.jpg","6ab5bbbecf29b7268384c8bf0b027297"],["/2022/07/26/diary/46.jpg","da22524be36de6a11233cacb9aa3e3e4"],["/2022/07/26/diary/47.jpg","1a5c4de3d36ac68fd4404e69ce3ec28d"],["/2022/07/26/diary/48.jpg","765c9a0a52ccac02a66f357ab295b951"],["/2022/07/26/diary/49.jpg","0f4ede208a5b59ba02e387976679b613"],["/2022/07/26/diary/5.jpg","2aea36162194ea8b9cef1dd554dc365d"],["/2022/07/26/diary/50.jpg","57baca54d32bdde687bc013518169a9f"],["/2022/07/26/diary/51.jpg","beb043e888c2fbedaa0b94fb996fb1df"],["/2022/07/26/diary/52.jpg","d032c63d2742a1d9c9b8187f5d3fdb83"],["/2022/07/26/diary/53.jpg","16221219dd1a512700c7dcffb3b24f89"],["/2022/07/26/diary/54.jpg","c608fa1ce9494ec17b1f13a88422dd22"],["/2022/07/26/diary/55.jpg","91503f28ffb171f8a95dba10ca737e74"],["/2022/07/26/diary/6.jpg","7de66c261ed77dd8f664a5d4c3f638f4"],["/2022/07/26/diary/644FB958442E1921F7A59F65ABAD1986.png","644fb958442e1921f7a59f65abad1986"],["/2022/07/26/diary/7.jpg","fe87dbff80264ce379340d0504ff00fb"],["/2022/07/26/diary/8.jpg","651c224afb169606684a7ecae0843334"],["/2022/07/26/diary/9.jpg","58e752611d43c330c884c5c339382df2"],["/2022/07/26/diary/QQ图片20221115001005.png","f33f974955ea93b8f05b74e021e3fec7"],["/2022/07/26/diary/index.html","f279d63601d1bb010f8b8925831083f7"],["/2022/07/26/diary/xm-1-1.jpg","70c91571e086399770bbebf9de959baa"],["/2022/07/26/diary/xm-1-2.jpg","0fbd0fd6b9e04b9cff2c32bf2740b894"],["/2022/07/26/diary/xm-1-3.jpg","4f9d7126fffc2de5115f94d1182b4cf3"],["/2022/07/26/diary/xm-1-4.jpg","219914c7c4bab6a50380f4b0c13e78b9"],["/2022/07/26/diary/xm-1-5.jpg","237729f4d7d74b4b3a211d3145a50328"],["/2022/07/26/diary/xm-1-6.jpg","284678e166747dded64f47d1befbd501"],["/2022/07/26/diary/xm-1-7.jpg","21c77cb8895001e11489c99350711623"],["/2022/07/26/diary/xm-1-8.jpg","5534e7fe710c7bfd44e13006dc0e423e"],["/2022/07/26/diary/xm-1-9.jpg","f0d9b27a6c71d395c10f1da45ebb54ee"],["/2022/07/26/diary/xm-2-1.png","b4aaa5f63ed0be57ee3f857b9c36fc16"],["/2022/07/26/diary/xm-2-10.png","5f982222a81dee792db3016b2df5456b"],["/2022/07/26/diary/xm-2-11.png","8d041fb66c29d981ef5a18bedf0070c8"],["/2022/07/26/diary/xm-2-12.png","396a49ef37f617cb5f9f3c968846e50f"],["/2022/07/26/diary/xm-2-13.png","eff30f4b82b4dc5a13cb85b7afd304bb"],["/2022/07/26/diary/xm-2-14.png","2d0d17b9e077d3c3f75d5d35bc70e900"],["/2022/07/26/diary/xm-2-15.png","1322c688573963a0e5bb44577360b66c"],["/2022/07/26/diary/xm-2-16.png","c16aa0fe1c04633b0707a4fdca8daf7e"],["/2022/07/26/diary/xm-2-17.png","1684b21c8a7b78ae360880a872086bcc"],["/2022/07/26/diary/xm-2-18.png","222d7d3cf440393beb288f99caab0bc6"],["/2022/07/26/diary/xm-2-19.png","4d30fb0fa7f00dc5c65f5eda3cd94a89"],["/2022/07/26/diary/xm-2-2.png","4e8b7c9886eb7283773198b6a470e9d2"],["/2022/07/26/diary/xm-2-3.png","69ac70b02b6c105ef7367d5c8cf2b35b"],["/2022/07/26/diary/xm-2-4.png","ec40f68b727072167ba34cbc7224c189"],["/2022/07/26/diary/xm-2-5.png","26ccc688d7c3c50c53297b75ecde2296"],["/2022/07/26/diary/xm-2-6.png","19c8204cea87b591a4d7e23c16f8b5d5"],["/2022/07/26/diary/xm-2-7.png","c4edebc2af027a64141b9362835e1aa6"],["/2022/07/26/diary/xm-2-8.png","f88eb56f75b58337748b387f775de19c"],["/2022/07/26/diary/xm-2-9.png","ed7ca006059def81ded049a2a7451a8f"],["/2022/07/26/diary/xm-3-1.png","1d267d743602ecd0de4666f803af63ca"],["/2022/07/26/diary/xm-3-10.png","abba541413618846b7eaacdea9a452cb"],["/2022/07/26/diary/xm-3-11.png","5e405f2523fd05ec424f002b98ad58f0"],["/2022/07/26/diary/xm-3-2.png","d81cf5e25fa140af7f74675ab91daa06"],["/2022/07/26/diary/xm-3-3.png","98f12ebb0e10d1efece08ff476cd0d62"],["/2022/07/26/diary/xm-3-4.png","d538a77381f37d84f25ac1c0c7dee613"],["/2022/07/26/diary/xm-3-5.png","705a6dce1c87c2c65db2e026a864d36e"],["/2022/07/26/diary/xm-3-6.png","f7be37f22ab95b5bb6fba58939de7cb5"],["/2022/07/26/diary/xm-3-7.png","2514703d1731a0a860f740d2f53f0397"],["/2022/07/26/diary/xm-3-8.png","a440389b1761afd0c77cf9828be36cfa"],["/2022/07/26/diary/xm-3-9.png","b1f39d4cbcb95ea0318730c28a2db62b"],["/2022/07/26/diary/xm-45-1.png","f89b06643cdaf244ad81a7dfd0432c8c"],["/2022/07/26/diary/xm-45-10.png","c7479147efbdcd862960bceecbcd38cd"],["/2022/07/26/diary/xm-45-11.png","1e55b15844a25666c9123f7b9be6ca45"],["/2022/07/26/diary/xm-45-12.png","be3922b2c4a55834f440a479bfb11d9c"],["/2022/07/26/diary/xm-45-13.png","e7a5b2596247562980b5530be436c7a8"],["/2022/07/26/diary/xm-45-14.png","81933badc981772fb44f0a26eafcce92"],["/2022/07/26/diary/xm-45-15.png","aeab499e19330021b12c174b790e6914"],["/2022/07/26/diary/xm-45-16.png","961833e44e26227aa9462a9e8dc1249d"],["/2022/07/26/diary/xm-45-17.png","b194682a8ee534969715413e46959745"],["/2022/07/26/diary/xm-45-18.png","cd899b8e69feff73dbeb779cc7f1a4ec"],["/2022/07/26/diary/xm-45-19.png","390a64cbacebd6a0d7d1c86821cf9909"],["/2022/07/26/diary/xm-45-2.png","9101b99c0ff8ea2e4f210d5d4dc3cceb"],["/2022/07/26/diary/xm-45-20.png","1bba9f55dae9bdf180ff2c5ca092799e"],["/2022/07/26/diary/xm-45-3.png","7c92ac0bfdc1af108660c31c193b8bfa"],["/2022/07/26/diary/xm-45-4.png","b5acfd8f1642ba2eac203a7265138e1a"],["/2022/07/26/diary/xm-45-5.png","baf784e5ead7cfee33732009a81846b8"],["/2022/07/26/diary/xm-45-6.png","035ac83bfe2506af00b31c4651aff80b"],["/2022/07/26/diary/xm-45-7.png","0bc6f2fd0b8b4fd2ae186108ddda627f"],["/2022/07/26/diary/xm-45-8.png","fc86c7956ed347db5ec3b7db6f5d562f"],["/2022/07/26/diary/xm-45-9.png","eb7b18f1ddbf269b233e7ca5e1da3849"],["/2022/07/26/diary/xm-6-1.png","ae2c1582a426f0709083ae4df2c54026"],["/2022/07/26/diary/xm-6-10.png","d2c75e0338f1a4ec5cc110f154fa070d"],["/2022/07/26/diary/xm-6-11.png","05156590c3d8708c0cf3dba784a84cad"],["/2022/07/26/diary/xm-6-12.png","6755ac491f380117b8d85196203a7269"],["/2022/07/26/diary/xm-6-13.png","23ac60c665c119e44088cb5afea8f221"],["/2022/07/26/diary/xm-6-14.png","685b14f416538689f028e85a8db3609f"],["/2022/07/26/diary/xm-6-15.png","9121273aebe4a55b6c1a15e6d0268429"],["/2022/07/26/diary/xm-6-16.png","ba7652e569b6761e8f72345f40435a53"],["/2022/07/26/diary/xm-6-17.png","a1440551603bfd89e550b57ede0400a1"],["/2022/07/26/diary/xm-6-18.png","9f0756e308e20a93636b0cfc7a5dcb74"],["/2022/07/26/diary/xm-6-2.png","325b61ba313914597a3e0a425f5797f0"],["/2022/07/26/diary/xm-6-3.png","b889e43be12e90e3d75e18187a96d4cc"],["/2022/07/26/diary/xm-6-4.png","26caaa59f4b26c7c24676623e4fe9720"],["/2022/07/26/diary/xm-6-5.png","bd58654ecbca5e5313fae5ba9c99f56e"],["/2022/07/26/diary/xm-6-6.png","3283c17c27f36b2713616c22f05df2d2"],["/2022/07/26/diary/xm-6-7.png","b2226196d4fa9e92ef1f318c6cadebf1"],["/2022/07/26/diary/xm-6-8.png","7cf9bb2995c9ed4e858504ddf4ce6384"],["/2022/07/26/diary/xm-6-9.png","7dcf54d2817a35fd2b5cea2214939a83"],["/2022/07/26/diary/xm-v-1.png","352b15ec1c2e8766e3953f374a0b20a0"],["/2022/07/26/diary/xm-v-2.png","8279189849fc4c762bb2617c09df1261"],["/2022/07/26/diary/xm-v-3.png","b940a6b302a32859acfd917be67981a3"],["/2022/07/26/diary/xm-v-4.png","a44b6dfbbebfea13b688469bfc3cd31f"],["/2022/07/26/diary/xm-v-5.png","ebba6112d13892fc1863175b9018ea30"],["/2022/07/26/diary/xm-v-6.png","f8e11c3cae13894de3c27e9bc9e42a4e"],["/2022/07/26/diary/淑芬考后群聊状态.png","e26fcf2c58f557aa975883fb5807eeac"],["/2022/07/26/diary/聘书.png","3e2b1654d4f956fcb14583cf7516d6d9"],["/2022/07/26/test/index.html","79422e8e338f833ca7611ad876c938c5"],["/2022/08/24/improvement-group-boards/index.html","e8a16976ca45f47c64ba1b3175809005"],["/2022/10/15/初始星图/1.png","254139acb423f51e160c66a30f56d574"],["/2022/10/15/初始星图/2.png","282e7c5286edba6d4bd12ef5eab2b737"],["/2022/10/15/初始星图/3.png","297c833c7e452ee3bd58ee64e8a6880b"],["/2022/10/15/初始星图/4.png","646aaf537edb19bac4d83460edadcfdd"],["/2022/10/15/初始星图/5.png","6d957783a2c4a3d80c999d4ca795c780"],["/2022/10/15/初始星图/6.png","da0e68dbe17dcff8c653d0e4c92c71c0"],["/2022/10/15/初始星图/7.png","d2dcc5235157edecd4320107827c01ca"],["/2022/10/15/初始星图/8.png","81f12a78b102e981d944d75c438ede30"],["/2022/10/15/初始星图/index.html","14b2b5a869a2ddfccabc3ceaadcb5bdb"],["/2022/10/15/初始星图/v2-ca7417c57d89ab041900140ee82e45db_r.jpg","dd3ba3c1b8925186eba8b765b1ebbf0e"],["/2022/10/18/民用航空与导航技术/6.png","10878561edc7fc70d18ed8efc1c5c8f4"],["/2022/10/18/民用航空与导航技术/7.png","244fea84efc7c75a4a48ab66da077af2"],["/2022/10/18/民用航空与导航技术/8.png","19d49f8f2770a92002ffc599e097da15"],["/2022/10/18/民用航空与导航技术/9.png","9a537043a940d36f95903295580b32b9"],["/2022/10/18/民用航空与导航技术/index.html","c306356c5908a60db62fef9f0944ef33"],["/2022/11/25/星图研究——子图同构Ullmann算法/index.html","55086075288619a54ea302a87d0715d2"],["/2022/11/25/星图研究——子图同构Ullmann算法/无标题-1.png","87b06d159fb220c7458beaef854d82bb"],["/2022/11/25/星图研究——子图同构Ullmann算法/无标题-2.png","5454909460da4557b6167d7b4da67236"],["/2022/11/25/星图研究——子图同构Ullmann算法/无标题.png","227d8495181c5df1093918e72d0b501c"],["/2022/11/26/The-Differences-in-Grammar-between-AE-BE/index.html","c256ee6343ab4e42f988d5f82133a2f8"],["/2022/11/26/The-Differences-in-Grammar-between-AE-BE/wps1.jpg","c124951e58330c72ac199ac40bfd193b"],["/2022/11/26/The-Differences-in-Grammar-between-AE-BE/wps2.jpg","6786cc0fe524a80873cebd5fb2d6b760"],["/2022/11/26/《周恩来旅日日记》心得体会/index.html","5d0ea29d878ee86c2b64aa34581ebb18"],["/2022/11/26/《周恩来旅日日记》心得体会/图片1.png","9e9cca8906dea4f0c6fb8ebd604962c8"],["/2022/11/26/《周恩来旅日日记》心得体会/图片10.png","695bcd34936cdbaf72e9f47b83c045a0"],["/2022/11/26/《周恩来旅日日记》心得体会/图片11.png","18723c92972565015e69a2b090ff65c0"],["/2022/11/26/《周恩来旅日日记》心得体会/图片12.png","58c3270cbad4c24742464e1cbdc69b84"],["/2022/11/26/《周恩来旅日日记》心得体会/图片13.png","c553dd2629630b0a6101b0a8862ee752"],["/2022/11/26/《周恩来旅日日记》心得体会/图片14.png","74d34dc8cd3dd3a5a2339840ee01b250"],["/2022/11/26/《周恩来旅日日记》心得体会/图片15.png","c254a86a266ef481deb8aac46ac8d2d3"],["/2022/11/26/《周恩来旅日日记》心得体会/图片2.png","28be86b9d4fa91f2293a0de23905eda8"],["/2022/11/26/《周恩来旅日日记》心得体会/图片3.png","b83ba51c36e40be730025d93ccf68a77"],["/2022/11/26/《周恩来旅日日记》心得体会/图片4.png","4458dbfcb1f97f7ebb9c8a49587ab503"],["/2022/11/26/《周恩来旅日日记》心得体会/图片5.png","4af2fae11a7b5feacf8e9e06e41ee8a5"],["/2022/11/26/《周恩来旅日日记》心得体会/图片6.png","09b2590e5cb2b11dfd105f057f5b8beb"],["/2022/11/26/《周恩来旅日日记》心得体会/图片7.png","97c3027dea80527d07367822073047af"],["/2022/11/26/《周恩来旅日日记》心得体会/图片8.png","acdce8faec0bd0c782df81858dc00328"],["/2022/11/26/《周恩来旅日日记》心得体会/图片9.png","2a32860e726de2d8050f588f8648443c"],["/2022/11/26/万顷波中得自由/index.html","e912023b260b135b04497e9896f6762a"],["/2022/11/26/下自成蹊三十载，爆轰闪光铸辉煌/index.html","a7c3347d3689fbcb18d0819c28ef5711"],["/2022/11/26/下自成蹊三十载，爆轰闪光铸辉煌/图片4.png","9bda509a81328f4fe798d9b1cada3ecf"],["/2022/11/26/下自成蹊三十载，爆轰闪光铸辉煌/图片5.png","8d4128d1ba47293b93bab91e253535c6"],["/2022/11/26/卖情怀？行走在舆论风口浪尖的中国爱国与科幻题材电影/index.html","43d77dcd60673a9ce4184be9edee1b45"],["/2022/11/26/卖情怀？行走在舆论风口浪尖的中国爱国与科幻题材电影/图片1.png","0a94137e3011a16c489e18f2dfc9d9ce"],["/2022/11/26/卖情怀？行走在舆论风口浪尖的中国爱国与科幻题材电影/图片2.png","0119034629a91ea0c3c06b45bd8e525a"],["/2022/11/26/卖情怀？行走在舆论风口浪尖的中国爱国与科幻题材电影/图片3.png","826497af5ce15d67787cc47297fd69b1"],["/about/index.html","c31d18d91a7c3ac3838b61b5b8103f4a"],["/archives/2022/07/index.html","c1db505f465a2800124febe250f9f37d"],["/archives/2022/08/index.html","1310af0b57b18b6ab30a83422a5ff03a"],["/archives/2022/10/index.html","96111fcadd64bbc6843745960d81b0d0"],["/archives/2022/11/index.html","c52c03b86f1c287d7cf4997100061247"],["/archives/2022/index.html","6c6da5a2e583b8760cd959785c7af830"],["/archives/2022/page/2/index.html","6558a38052a992d226d5e471a355ee76"],["/archives/index.html","09b123086d62a423a3870b2857c83940"],["/archives/page/2/index.html","64862cc63d7695b1daf16aa0608042b4"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/main.css","08ad4a2ab9111ab3df5e2f255c531b9e"],["/images/a16.png","9a4eb9b9f42d47408a8f2b117e4f513e"],["/images/a32.png","618981d581d3ba44f8f0256090d4cbc4"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/b16.png","18b980b0eab335e2ea9233ed14afb555"],["/images/b32.png","3dbbe433cedc3c999b5718f539e1867f"],["/images/c16.png","32d3a3c71a48d03c0d05df8253009399"],["/images/c32.png","c1ee8250067b3f6dc57f3ed210525177"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/d16.png","fdd8e195f5f38f0d46ef00b6dbb7fac4"],["/images/d32.png","9515ea0bdbb59cc0d6224a3f284d90f3"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/gravatar.jpg","272db186cf394544bda1f27809806a79"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/index.html","e0c36142344c2684e022366a16ee8c30"],["/js/algolia-search.js","365bb42f0c4b83787d2e988e9a0dbd6d"],["/js/bookmark.js","9631924f730be981fe8f8c14eb2c0afe"],["/js/local-search.js","4717317eb67fd5ca2e5c6da211489b51"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","c47528c6b7d3020a3dfd391c262dfebd"],["/js/schemes/muse.js","00003a337eaddaf997e3a3ca2b9958e6"],["/js/schemes/pisces.js","449ab6c338dc543eec24a7151b0456ab"],["/js/utils.js","b0c18b3d66c655eb297162a502b01c02"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/lib/pace/README.html","1a7af14a43fd5e73917ba240d0210275"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","9c7eeaedfc8cdecd0852f24c3dbf390c"],["/sw-register.js","3458c858ea703b76a16e3e067815e334"],["/tags/BUAA/index.html","4bd7cc22c698e8c602e840b673f97d0a"],["/tags/code/index.html","9f7b0c29cb1b30334d66068c45706832"],["/tags/index.html","86a16a752a593da8351dd43f02a5c89e"],["/tags/life/index.html","3fc804e09537dc8454095f36ebe322df"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
