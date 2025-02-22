import Link from "next/link";

export default function Home() {
  return (
    <div className="lg:pt-20 md:pt-[clamp(3rem,8vw,5rem)] pt-[15vw]">
      <main className="lg:pt-[75px] lg:px-[10vw] lg:pb-[150px] md:pt-[clamp(46.95px,6.25vw,60px)] md:px-[clamp(43.04px,5.73vw,55px)] md:pb-[clamp(62.6px,8.3vw,80px)] pt-[clamp(40.25px,12.3vw,92.03px)] px-[clamp(26.25px,8vw,60.02px)] pb-[clamp(70px,21.34vw,160.05px)] lg:grid lg:relative lg:grid-rows-[auto_auto_auto] lg:grid-cols-[743fr_102fr_235fr] max-w-[1670px] mx-auto">
        <header className="row-[1/2] col-[1/4] md:flex md:items-baseline lg:mb-[55px] mb-[clamp(23.19px,5.73vw,55px)]">
          <h1 className="lg:text-4xl md:text-[clamp(28.17px,3.75vw,36px)] text-[clamp(21px,6.4vw,48.02px)]">
            Hairmake
            <small className="md:text-[.555555555555556em] text-[.666666666666667em]">
              +LIM
            </small>
          </h1>
          <p
            lang="ja"
            className="lg:text-sm md:text-[clamp(10.17px,1.35vw,13px)] text-[clamp(9.625px,2.93vw,22px)] lg:ml-5 md:ml-[clamp(15.65px,2.09vw,1.25rem)] ml-[clamp(1.75px,0.53vw,4px)] md:mt-0 mt-[clamp(4.375px,1.33vw,10px)]"
          >
            ヘアメイク
          </p>
        </header>
        <div className="row-[2/3] col-[1/2]">
          <picture className="relative block before:content-[''] lg:mb-[53.5px] md:mb-[clamp(26.6px,3.54vw,34px)] mb-[clamp(29.75px,9.06vw,68px)] lg:mx-0 md:mx-[clamp(-10px,-1.04vw,-7.825px)] mx-[clamp(-20px,-2.66vw,-8.75px)] before:block before:w-full before:h-0 before:pb-[56.527590847913864%]">
            <source media="(min-width: 751px)" srcSet="/images/hairmake.jpg" />
            <img
              src="/images/hairmake-750x424.jpg"
              alt="Hairmake+LIM"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
          <div>
            <p className="lg:text-sm md:text-[clamp(10.17px,1.354vw,13px)] text-[clamp(10.5px,3.2vw,24px)]">
              LIMでは雑誌・CM・広告・カタログ・アーティストなど幅広くヘアメイクのお仕事に携わらせて頂いています。
              <br />
              モデル一人の撮影からファッションショーまで、チームでの仕事、セパレートでの仕事、個人での仕事と状況に応じて現場でのスムーズな対応が可能となっております。「＋LIM」の仕上がりを、フレキシブルに。
            </p>
          </div>
          <section className="lg:mt-[100px] md:mt-[clamp(78.25px,10.4vw,100px)] mt-[clamp(43.75px,13.3vw,100px)]">
            <h2 className="lg:text-2xl md:text-[clamp(18.78px,2.5vw,24px)] text-[clamp(15.75px,4.8vw,36px)] lg:mb-[35px] md:mb-[clamp(27.39px,3.65vw,35px)] mb-[clamp(21px,6.4vw,48px)]">
              WORKS
            </h2>
            <h3 className="border-b border-[#ddd] lg:text-base md:text-[clamp(12.52px,1.66vw,1rem)] text-[clamp(12.25px,3.73vw,28px)] lg:mb-5 md:mb-[clamp(15.65px,2.08vw,1.25rem)] mb-[clamp(17.5px,5.33vw,40px)] lg:pb-[14.2px] md:pb-[clamp(11.13px,1.48vw,14.2px)] pb-[clamp(6.125px,1.867vw,14px)]">
              CM & ADVERTISING & OTHER
            </h3>
            <picture>
              <source media="(min-width: 751px)" srcSet="/images/0.l.jpg" />
              <img
                src="/images/0.jpg"
                alt=""
                className="lg:mt-[60px] md:mt-[clamp(47px,6.25vw,60px)] mt-[clamp(26.25px,8vw,60px)]"
              />
            </picture>
            <h4 className="lg:text-base md:text-[clamp(12.52px,1.66vw,1rem)] text-[clamp(11.375px,3.467vw,26px)] lg:mt-10 md:mt-[clamp(31.3px,4.167vw,2.5rem)] mt-[clamp(26.25px,8vw,60px)] lg:mb-3 md:mb-[clamp(9.4px,1.25vw,0.75rem)] mb-[clamp(7.875px,2.4vw,18px)]">
              Magazine/Catalogue/Advertising
            </h4>
            <p className="lg:text-xs md:text-[clamp(9.4px,1.25vw,0.75rem)] text-[clamp(10.5px,3.2vw,24px)]">
              DAZED, Numero, 装苑, FUDGE,kiitos,SPRiNG,Kinfolk, リンネル,
              天然生活, YOHJI YAMAMOTO, keisuke kanda,ANREALAGE, THERIACA,
              Journal standard Furniture, JVCケンウッド, DAIWA, une nana
              cool,Fostex, KBF, KBF+, N21 numero ventuno, HEAVENLY, GBB, UNITED
              ARROWS, Blencle., Cion, French Bull, nu chayamachi, 東急電鉄,
              SHINTO TOWEL, THE ROYAL PARK HOTEL, NAGOYA Marriott HOTEL,
              INTERCONTINENTAL YOKOHAMA PIER8, JR Takashimaya GATE TOWER
              MALL,atelier nature, Dakota,Fiore Bianca, THE SWEET COLLECTION,
              LaLa Chance HAKATA,GRANGE, きものやまと, KIMONO BY NADESHIKO,
              六甲ミーツアート, クラシコム, kraso, Couturier, YOU+MORE!,
              MEDE19F, USEDo, el:ment,UP.de, CONCENTO, H.P.FRANCE, PAGE BOY,
              エヘカソポ, LOVE北欧, THEATRE PRODUCTS, 大塚呉服店, KATOJI, 他
            </p>
            <h4 className="lg:text-base md:text-[clamp(12.52px,1.66vw,1rem)] text-[clamp(11.375px,3.467vw,26px)] lg:mt-10 md:mt-[clamp(31.3px,4.167vw,2.5rem)] mt-[clamp(26.25px,8vw,60px)] lg:mb-3 md:mb-[clamp(9.4px,1.25vw,0.75rem)] mb-[clamp(7.875px,2.4vw,18px)]">
              Runway Show
            </h4>
            <p className="lg:text-xs md:text-[clamp(9.4px,1.25vw,0.75rem)] text-[clamp(10.5px,3.2vw,24px)]">
              ETRO collection at Japan, CHANEL collection at Singapore, Dior
              collection at Singapore,ANREALAGE collection at Paris.at Japan
              hair support, Mame kuroguchi at Paris,hair support, mintdesigns at
              Japan hair support, 他
            </p>
            <h4 className="lg:text-base md:text-[clamp(12.52px,1.66vw,1rem)] text-[clamp(11.375px,3.467vw,26px)] lg:mt-10 md:mt-[clamp(31.3px,4.167vw,2.5rem)] mt-[clamp(26.25px,8vw,60px)] lg:mb-3 md:mb-[clamp(9.4px,1.25vw,0.75rem)] mb-[clamp(7.875px,2.4vw,18px)]">
              Artist
            </h4>
            <p className="lg:text-xs md:text-[clamp(9.4px,1.25vw,0.75rem)] text-[clamp(10.5px,3.2vw,24px)]">
              YOASOBI, 幾田りら, 吉澤嘉代子, フジファブリック, YOSHI, 八木海莉,
              ウルフルズ, 電気グルーヴ, CNBLUE, 私立恵比寿中学, RAM WIRE,
              SPYAIR, 河村隆一, 青木隆治, 井上苑子, クマムシ, KANIKAPILA, 他
            </p>
            <h4 className="lg:text-base md:text-[clamp(12.52px,1.66vw,1rem)] text-[clamp(11.375px,3.467vw,26px)] lg:mt-10 md:mt-[clamp(31.3px,4.167vw,2.5rem)] mt-[clamp(26.25px,8vw,60px)] lg:mb-3 md:mb-[clamp(9.4px,1.25vw,0.75rem)] mb-[clamp(7.875px,2.4vw,18px)]">
              Actress/Model
            </h4>
            <p className="lg:text-xs md:text-[clamp(9.4px,1.25vw,0.75rem)] text-[clamp(10.5px,3.2vw,24px)]">
              小松菜奈, emma, 安達祐実, 堀田まゆ, 吉岡里帆, モトーラ世理奈,
              Kanoco, 飯豊まりえ, 加村真美, 葵わかな, 伊藤万理華, 山本舞香,
              佐野ひなこ, 玉城ティナ, 森田想, 萬波ユカ, 門田怜, 松岡モナ,
              福士リナ, 福士マリ, エモン久瑠美, エモン美由貴, ベイン理紗, Lee
              Yoko, ハンナ, 村田倫子, 横田美瞳, 松木育未, 高橋佳子, miyu,
              雪見みと, 小川紗良, 佐藤玲, 清水こづえ, 松山莉奈, 中島侑香,
              雑賀カアネ, 王真琳, 名和風歌, 沖樹莉亜, 吉田沙世, 高見まなみ,
              谷口蘭, 中田絢千, 長尾寧音, 田中シェン, Lee momoka, 満島みなみ,
              木村舞輝, 澤村花菜, 佐々木美緒, Niki, Asae, Shin Lee, PIPI,
              イーラン, Vincent Gallo, ディーンフジオカ, 高橋義明, 他
            </p>
          </section>
          <section className="lg:mt-[100px] md:mt-[clamp(78.25px,10.4vw,100px)] mt-[clamp(43.75px,13.3vw,100px)]">
            <h3 className="border-b border-[#ddd] lg:text-base md:text-[clamp(12.52px,1.66vw,1rem)] text-[clamp(12.25px,3.73vw,28px)] lg:mb-5 md:mb-[clamp(15.65px,2.08vw,1.25rem)] mb-[clamp(17.5px,5.33vw,40px)] lg:pb-[14.2px] md:pb-[clamp(11.13px,1.48vw,14.2px)] pb-[clamp(6.125px,1.867vw,14px)]">
              BRIDAL
            </h3>
            <picture>
              <source media="(min-width: 751px)" srcSet="/images/1.l.jpg" />
              <img
                src="/images/1.jpg"
                alt=""
                className="lg:mt-[60px] md:mt-[clamp(47px,6.25vw,60px)] mt-[clamp(26.25px,8vw,60px)] lg:mb-[50px] md:mb-[clamp(39.13px,5.2vw,50px)] mb-[clamp(26.25px,8vw,60px)]"
              />
            </picture>
            <p className="lg:text-xs md:text-[clamp(9.4px,1.25vw,0.75rem)] text-[clamp(10.5px,3.2vw,24px)]">
              LIMではブライダルヘアメイクも行なっております。私たちLIMが手がけるブライダルヘアメイクは、ただヘアメイクをさせていただくだけではなく、お二人にとって、ご家族にとって、ご友人にとってどのような時間になれば喜んでいただけるかを目一杯考えさせていただきます。
            </p>
            <div className="lg:mt-[60px] md:mt-[clamp(47px,6.25vw,60px)] mt-[clamp(35px,10.67vw,80px)]">
              <Link
                href="/"
                className="md:max-w-[14.625rem] lg:text-sm md:text-[clamp(11px,1.46vw,14px)] text-[clamp(13.125px,4vw,30px)] lg:h-[3.375rem] md:h-[clamp()] flex justify-center items-center border border-[#ddd] w-full"
              >
                ブライダルページを見る
              </Link>
            </div>
          </section>
        </div>
        <div className="row-[2/3] col-[3/4] relative">
          <div>
            <section>
              <header>Contact</header>
              <p>
                雑誌、CM、広告などのヘアメイクの依頼は以下からお問い合わせください。
              </p>
              <div>
                <Link href="/">ヘアメイクのご依頼</Link>
              </div>
            </section>
          </div>
        </div>
        <footer className="row-[3/4] col-[1/4]">
          <div>
            <Link href="/">Back</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
