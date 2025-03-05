import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-[3.9375rem] md:pt-[4.375rem] lg:pt-[5.1875rem]">
      <main className="pt-[2.875rem] pb-20 px-[1.875rem] md:text-[.8125rem] md:leading-loose md:pt-[3.75rem] md:pb-[3.4375rem] md:px-20 lg:grid lg:grid-rows-[auto_auto_auto] lg:grid-cols-[743fr_102fr_235fr] lg:relative lg:max-w-[1670px] lg:pt-[4.6875rem] lg:pb-[9.375rem] lg:px-[10vw] lg:my-0 lg:mx-auto xl:pt-[5.688622754491018vw] xl:pb-[11.377245508982035vw] xl:px-[13.541666666666666vw]">
        <header className="row-[1/2] col-[1/4] mb-[1.65625rem] md:flex md:items-baseline md:mb-[3.4375rem]">
          <h1 className="text-[1.5rem] tracking-[.04em] leading-[1.291666666666667] md:text-[2.25rem] md:leading-[1.277777777777778]">
            Hairmake
            <small className="text-[.666666666666667em] md:text-[.555555555555556em]">
              +LIM
            </small>
          </h1>
          <p
            lang="ja"
            className="text-[.6875rem] tracking-[0] leading-none mt-[.3125rem] ml-[.125rem] md:text-[.8125rem] md:tracking-[.02em] md:ml-5"
          >
            ヘアメイク
          </p>
        </header>
        <div className="row-[2/3] col-[1/2]">
          <picture className="relative block mb-[2.125rem] mx-[-.625rem] lg:mb-[3.34375rem] lg:mx-0 before:content-[''] before:block before:w-full before:h-0 before:pb-[56.527590847913864%]">
            <source media="(min-width: 751px)" srcSet="/images/hairmake.jpg" />
            <img
              src="/images/hairmake-750x424.jpg"
              alt="Hairmake+LIM"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
          <div>
            <p>
              LIMでは雑誌・CM・広告・カタログ・アーティストなど幅広くヘアメイクのお仕事に携わらせて頂いています。
              <br />
              モデル一人の撮影からファッションショーまで、チームでの仕事、セパレートでの仕事、個人での仕事と状況に応じて現場でのスムーズな対応が可能となっております。「＋LIM」の仕上がりを、フレキシブルに。
            </p>
          </div>
          <section className="mt-[3.125rem] md:text-[.75rem] md:mt-[6.25rem]">
            <h2 className="text-[1.125rem] tracking-[.02em] leading-none mb-6 md:text-[1.5rem] md:tracking-[.03em] md:mb-[2.1875rem]">
              WORKS
            </h2>
            <h3 className="border-b border-[#ddd] text-[.875rem] tracking-[.03em] leading-[1.214285714285714] mb-5 md:text-[1rem] md:tracking-[.03em] md:leading-[1.0625] md:pb-[.888888888888889em]">
              CM & ADVERTISING & OTHER
            </h3>
            <picture className="block relative overflow-hidden my-[1.875rem] md:mt-[3.75rem] md:mb-[3.125rem] before:content-[''] before:block before:w-full before:h-0 before:pb-[56.451612903225815%]">
              <source media="(min-width: 751px)" srcSet="/images/0.l.jpg" />
              <img
                src="/images/0.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </picture>
            <h4 className="text-[.8125rem] tracking-[.06em] leading-none mt-[1.875rem] mb-[.5625rem] md:text-[1rem] md:tracking-[.03em] md:mt-10 md:mb-[.75rem]">
              Magazine/Catalogue/Advertising
            </h4>
            <p>
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
            <h4 className="text-[.8125rem] tracking-[.06em] leading-none mt-[1.875rem] mb-[.5625rem] md:text-[1rem] md:tracking-[.03em] md:mt-10 md:mb-[.75rem]">
              Runway Show
            </h4>
            <p>
              ETRO collection at Japan, CHANEL collection at Singapore, Dior
              collection at Singapore,ANREALAGE collection at Paris.at Japan
              hair support, Mame kuroguchi at Paris,hair support, mintdesigns at
              Japan hair support, 他
            </p>
            <h4 className="text-[.8125rem] tracking-[.06em] leading-none mt-[1.875rem] mb-[.5625rem] md:text-[1rem] md:tracking-[.03em] md:mt-10 md:mb-[.75rem]">
              Artist
            </h4>
            <p>
              YOASOBI, 幾田りら, 吉澤嘉代子, フジファブリック, YOSHI, 八木海莉,
              ウルフルズ, 電気グルーヴ, CNBLUE, 私立恵比寿中学, RAM WIRE,
              SPYAIR, 河村隆一, 青木隆治, 井上苑子, クマムシ, KANIKAPILA, 他
            </p>
            <h4 className="text-[.8125rem] tracking-[.06em] leading-none mt-[1.875rem] mb-[.5625rem] md:text-[1rem] md:tracking-[.03em] md:mt-10 md:mb-[.75rem]">
              Actress/Model
            </h4>
            <p>
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
          <section className="mt-[3.125rem] md:mt-[6.25rem]">
            <h3 className="border-b border-[#ddd] text-[.875rem] tracking-[.03em] leading-[1.214285714285714] mb-5 md:text-[1rem] md:tracking-[.03em] md:leading-[1.0625] md:pb-[.888888888888889em]">
              BRIDAL
            </h3>
            <picture className="block relative overflow-hidden my-[1.875rem] md:mt-[3.75rem] md:mb-[3.125rem] before:content-[''] before:block before:w-full before:h-0 before:pb-[56.527590847913864%]">
              <source media="(min-width: 751px)" srcSet="/images/1.l.jpg" />
              <img
                src="/images/1.jpg"
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </picture>
            <p>
              LIMではブライダルヘアメイクも行なっております。私たちLIMが手がけるブライダルヘアメイクは、ただヘアメイクをさせていただくだけではなく、お二人にとって、ご家族にとって、ご友人にとってどのような時間になれば喜んでいただけるかを目一杯考えさせていただきます。
            </p>
            <div className="mt-10 md:mt-[3.75rem]">
              <Link
                href="/"
                className="flex justify-center items-center border border-[#ddd] text-[.9375rem] w-full h-[3.9375rem] md:max-w-[14.625rem] md:text-[.875rem] md:h-[3.375rem]"
              >
                ブライダルページを見る
              </Link>
            </div>
          </section>
        </div>
        <div className="row-[2/3] col-[3/4] relative mt-[3.4375rem] lg:m-0">
          <div className="sticky top-[7.6875rem]">
            <section>
              <header className="text-[.8125rem] tracking-[.02em] leading-[1.230769230769231] text-[#999] mb-3 md:mb-[.8125rem]">
                Contact
              </header>
              <p>
                雑誌、CM、広告などのヘアメイクの依頼は以下からお問い合わせください。
              </p>
              <div className="mt-[1.875rem]">
                <Link
                  href="/"
                  className="flex justify-center items-center border border-[#ddd] text-[.9375rem] w-full h-[3.9375rem] md:text-[.875rem] md:h-[3.375rem]"
                >
                  ヘアメイクのご依頼
                </Link>
              </div>
            </section>
          </div>
        </div>
        <footer className="row-[3/4] col-[1/4]">
          <div className="mt-[3.375rem]">
            <Link
              href="/"
              className="inline-flex items-center text-[.6875rem] tracking-[.04em] leading-[1.272727272727273] md:text-[.75rem] md:leading-[1.166666666666667] before:content-[''] before:w-[.4375rem] before:h-[.75rem] before:mr-[.9375rem] before:bg-no-repeat before:bg-center before:bg-contain before:bg-[url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNyAxMicgd2lkdGg9JzcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nbTYuNjgyIDEuMDUtLjcwNy0uNzA3LTUuNjU3IDUuNjU3IDUuNjU3IDUuNjU3LjcwNy0uNzA3LTQuOTUtNC45NXonLz48L3N2Zz4=')]"
            >
              Back
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
