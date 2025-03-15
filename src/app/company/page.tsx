import ContactForm from "@/_components/ContactForm";
import Link from "next/link";

const CompanyHome = () => {
  return (
    <div className="pt-[3.9375rem] md:pt-[4.375rem] lg:pt-[5.1875rem]">
      <main className="pt-[2.875rem] pb-20 px-[1.875rem] md:text-[.8125rem] md:leading-loose md:pt-[3.75rem] md:pb-20 md:px-[3.4375rem] lg:grid lg:grid-rows-[auto_auto_auto] lg:grid-cols-[743fr_102fr_235fr] lg:relative lg:max-w-[1670px] lg:pt-[4.6875rem] lg:pb-[9.375rem] lg:px-[10vw] lg:my-0 lg:mx-auto xl:pt-[5.688622754491018vw] xl:pb-[11.377245508982035vw] xl:px-[13.541666666666666vw]">
        <div className="flex justify-between text-[1.5rem] tracking-[.04em] leading-[1.291666666666667] mb-[2.125rem] row-[1/2] col-[1/4] md:text-[2.125rem] md:leading-[1.264705882352941] md:mb-[2.65625rem] lg:text-[2.25rem] lg:leading-[1.277777777777778] lg:mb-[3.90625rem]">
          <div>COMPANY</div>
          <div className="text-[.75rem]">
            <Link href="/company/">JA</Link>|<Link href="/company/en">EN</Link>|
            <Link href="/company/cn">CN</Link>|
          </div>
        </div>
        <div className="row-[2/3] col-[1/2]">
          <picture className="relative block mb-[2.125rem] mx-[-.625rem] lg:mb-[3.34375rem] lg:mx-0 before:content-[''] before:block before:w-full before:h-0 before:pb-[56.527590847913864%]">
            <source media="(min-width: 751px)" srcSet="/images/company.jpg" />
            <img
              src="/images/company-750x424.jpg"
              alt="COMPANY"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </picture>
          <section>
            <h1 className="text-[1.125rem] tracking-[.04em] leading-[1.277777777777778] mb-[1.125rem] md:text-[1.625rem] md:mb-[1.46875rem]">
              LESS IS MORE
            </h1>
            <div>
              <p>人を美しくすること。</p>
              <p className="mt-[1em]">
                本当に必要な言葉だけを残した結果、私たちがお客様の為にできる最大で最小の仕事は「人を美しくすると。」ただそれだけに尽きるのです。そのためには外見を美しくすることはもちろんのことですが、その方の内面にも向きあい、お互いに磨き合う必要があると考えているのです。所作、仕草、立ち振る舞いといった眼に見えるものから、哲学、理念、価値観といった眼に見えないものまで、私たちはしっかりとお客様と向き合える人間になろうと覚悟を決めました。
              </p>
              <p className="mt-[1em]">
                本来、日本では、節度を知り、質素な生活の中にある「奥ゆかしき贅沢」という強さを「美」としてきました。欧米的な「美の基準」ではなく、日本人であるという誇りを持った「美の基準」を、私たちは追求していきたいと考えています。
              </p>
              <p className="mt-[1em]">
                私たちはそんな「美しさの基準」をお客様に伝え、社会に広めることにより沢山の方に大きな感動を与え、「人を美しく幸せにして、そして、世界を変える。」
              </p>
              <p className="mt-[1em]">
                そういうことができるLIMでありたいと考えています。
              </p>
            </div>
            <div className="hidden">
              <p>Making people beautiful.</p>
              <p className="mt-[1em]">
                If we leave just the words that are truly necessary, it means
                that &quot;making people beautiful&quot; is all that we strive
                for, the least amount of work for the maximum effect possible
                for our customers. Of course this means we work to make the
                outer appearance beautiful, but we also address the inner beauty
                of the person, because we believe that both sides must work to
                refine the other. From the visible aspects of a person like
                conduct, bearing and behavior, to what cannot be seen, like
                philosophy, concept and values, we have resolved to become
                people ready to come face to face with our customers.
              </p>
              <p className="mt-[1em]">
                Originally &quot;beauty&quot; in Japan was seen as an awareness
                of moderation, and as the power of &quot;refined luxury&quot;
                within a simple lifestyle. At Less Is More we are on a quest not
                for a Western standard of beauty but for a standard of beauty
                that represents our pride in being Japanese.
              </p>
              <p className="mt-[1em]">
                We inform our customers of the &apos;criteria for beauty&apos;,
                through popularization we impress a lot of people, which in turn
                &apos;makes people happy and beautiful, and this consequently
                changes the world&apos;.
              </p>
              <p className="mt-[1em]">
                Our hope as LIM is to be the kind of company that can accomplish
                that.
              </p>
            </div>
            <div className="hidden">
              <p>让您变得更美丽。</p>
              <p className="mt-[1em]">
                去掉所有华而不实的语言，我们能够为顾客所做的最大也是最小的工作，就是“让您变得更美丽”，我们为此竭尽全力。为了达到这一点，我们认为使您的外表变得更加美丽当然很重要，但是能够直面您的内心，相互交流也是非常重要的。从仪态、动作、行动的姿势这些眼之所见的东西到哲学、观念、价值观这些不可目测的方面，我们坚定地要让自己成为能够完美地面对顾客的人。
              </p>
              <p className="mt-[1em]">
                一直以来，日本都以在知节制而朴素的生活中蕴藏的“深邃的奢华”这种力量作为“美”。我们想要追求的不是欧美对于“美的标准”，而是拥有作为一个日本人这种骄傲的“美的标准”。
              </p>
              <p className="mt-[1em]">
                我们通过将这种&quot;美的标准&quot;传递给顾客，为更多人们带来心灵的感动，&quot;让人们变得更美好和幸福，然后，改变世界。&quot;
              </p>
              <p className="mt-[1em]">我们希望 LIM 能够做到这些。</p>
            </div>
          </section>
          <section className="mt-[2.1875rem] md:mt-[4.375rem]">
            <h2 className="text-[.875rem] tracking-[.03em] leading-[1.214285714285714] mb-[1.25rem] md:text-[1rem] md:tracking-[.03em] md:leading-[1.0625]">
              HEAD OFFICE
            </h2>
            <div>
              <dl>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    社名
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    株式会社レスイズモア
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    本社所在地
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    大阪市中央区南船場4-11-19 心斎橋鉄田ビル4階
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    設立年月日
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    平成3年11月25日
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    代表取締役社長
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    西村侑記
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    相談役
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    西村徹也
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    社員総数
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    202名（令和3年10月1日現在）
                  </dd>
                </div>
                <div className="border-y border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    業務内容
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      ・美容サロンの経営、運営及びそれらに関するコンサルティング業務
                      <br />
                      ・美容に関するスクール運営、セミナー及び講演会の企画
                      <br />
                      ・ヘアメイク及び撮影業務
                      <br />
                      ・化粧品及び日用品雑貨の企画、デザイン、製造販売
                      <br />
                      ・映像及び出版物の企画、デザイン、製作及び販売
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="hidden">
              <dl>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    Company Name
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    LESS IS MORE Co.,Ltd.
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    Main Office Address
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Shinsaibashi Tetsuda Bldg. 4F, 4-11-19 Minamisenba, Chuo-ku,
                    Osaka-shi
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    Established
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    25 November 1991
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    CEO
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Yuuki Nishimura
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    Executive Counselor
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Tetsuya Nishimura
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    Total Employees
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    202 (as of 1 October 2021)
                  </dd>
                </div>
                <div className="border-y border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    Type of Business
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      ・Beauty salon management and operation and related
                      consulting services
                      <br />
                      ・Beauty-related school operation, planning of seminars
                      and lectures
                      <br />
                      ・Hair &amp; makeup and photography services
                      <br />
                      ・Planning, designing, manufacturing and sales of
                      cosmetics and household goods
                      <br />
                      ・Planning, designing, production and sales of images and
                      publications
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="hidden">
              <dl>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    公司名称
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    LESS IS MORE 公司
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    总公司地址
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    大阪府大阪市中央区南船場 4-11-19 心斎橋鉄田大厦 4F
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    创立日期
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    1991年11月25日
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    代表取締役社長
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    西村侑記
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    相談役
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    西村徹也
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    员工总数
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    202人（2021年10月1日的数据）
                  </dd>
                </div>
                <div className="border-y border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    業務內容
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      ・美容沙龍之經營、運作及其相關諮詢業務
                      <br />
                      ・經營美容相關學校、規劃研討會及演講
                      <br />
                      ・髮型設計及攝影業務
                      <br />
                      ・化妝品及日用雜貨之企畫、設計、製造販賣
                      <br />
                      ・影片及出版物之企畫、設計、製作與販賣
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
          <section className="mt-[3.125rem] md:mt-[6.25rem]">
            <h2 className="text-[.875rem] tracking-[.03em] leading-[1.21429] mb-5 md:text-[1rem] md:tracking-[.03em] md:leading-[1.0625] ">
              History
            </h2>
            <div>
              <dl>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1984
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    大阪府八尾市 近鉄八尾駅前「Cut Space Hair Do」オープン
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1987
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    同駅前に移転拡張 法人化 店名「LESS IS MORE」に改名
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1991
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    有限会社レスイズモア 設立
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1993
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    大阪市 西心斎橋に2店舗目「LESS IS MORE」オープン
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1996
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      大阪市 南船場4丁目にカフェ併設のサロンオープン
                      <br />
                      店名「LESS IS MORE」を「LIM hair」に改名
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1999
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      LIM hairのスペース拡張（同ビル3階オープン）
                      <br />
                      大阪市南堀江にアートギャラリー併設のニューコンセプトサロン「loji」オープン
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2003
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    南船場にトップスタイリストサロン「LIM second」オープン
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2005
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      LIM hairの1階cafeを「rec space」に改装
                      <br />
                      lojiのギャラリースペースを「rec from loji」に改装
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2006
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    東京都中目黒に「LIM hair clinie」をオープン
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2007
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      「douceur+LIM」「APARTMENT+LIM」をオープン
                      <br />
                      独立支援1号店「sifuku+LIM」南船場にオープン
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2008
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    ネイルロン「atelier+LIM」オープン
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2009
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      LESS IS MORE Singapore 設立
                      <br />
                      海外進出 シンガポールに「KIZUKI+LIM」オープン
                      <br />
                      東京・原宿に「LIM CODE」オープン
                      <br />
                      「+CUT」ウィッグをフロム・ファー・イースト社と共同開発し全国販売
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2010
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      アニバーサリーイベント &quot;LIM25&quot;
                      を堂島リバーフォーラムにて開催
                      <br />
                      シンガポール「KIZUKI+LIM」ラッフルズ・ホテルに移転拡張
                      <br />
                      11月 瓦町に独立支援店「botanico+LIM」オープン
                      <br />
                      オリジナルヘアケアプロダクツ「LESSMORE」開発販売
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2011
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    東京「LIM clinie」を南青山に移転拡張 店名を「Dot+LIM」に改名
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2012
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      「LESSMORE」シャンプー・トリートメント開発販売
                      <br />
                      7月 大阪 北堀江に独立支援店「Eurica+LIM」オープン
                      <br />
                      9月 シンガポール オーチャードに「PACT+LIM」オープン
                      <br />
                      10月 大阪 心斎橋に「LIM
                      hair」「APARTMENT+LIM」「loji」を統合移転「LIM+LIM」「loji+LIM」をオープン
                      <br />
                      同時に「atelier+LIM」にてアイラッシュメニュー開始
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2013
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      東京都の南青山にネイル・アイラッシュサロン「virth+LIM」オープン
                      <br />
                      大阪市の南船場にネイル・アイラッシュサロン「kolmio+LIM」オープン
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2014
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      シンガポールにネイルサロン「kiyone+LIM」オープン
                      <br />
                      11月 アニバーサリーイベント &quot;LIM30&quot;
                      を堂島リバーフォーラムにて開催
                      <br />
                      11月 ロンドンに「TSURU+LIM」オープン
                      <br />
                      12月 大阪市の梅田に「douceur+LIM」「atelier+LIM」を移転
                      <br />
                      同時にエスパサロン「même+LIM」オープン
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2015
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      2月 LIM NAIL SCHOOL 開校
                      <br />
                      10月 資生堂『STAGE WORKS』スタイリング剤 開発協力
                      <br />
                      11月 シンガポール「PACT+LIM」を「1tto+LIM」に改名
                      <br />
                      12月 シンガポールに「B+LIM」オープン
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2016
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      2月 LIM NAIL SCHOOL 東京校 開校
                      <br />
                      3月 プロダクトブランド「LISARCH」を発売開始
                      <br />
                      4月 東京・表参道に「nu+LIM」オープン
                      <br />
                      8月 「kiyone+LIM」「1tto+LIM」 移転リニューアルオープン
                      <br />
                      9月 福岡に「tükör+LIM」オープン
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2017
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      1月
                      「有限会社レスイズモア」から「株式会社レスイズモア」へ社名変更
                      <br />
                      1月 大阪谷町六丁目に独立支援店「coya+LIM」オープン
                      <br />
                      2月 アニバーサリーイベント &quot;LIMTOK1O&quot;
                      を渋谷ヒカリエホールにて開催
                      <br />
                      8月 香港『HOW+LIM』オープン
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2018
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      6月 東京都の代官山にネイル・アイラッシュサロン『yuo
                      virth+LIM』オープン
                      <br />
                      同時にネイルスクールが代官山に移転
                      <br />
                      10月 大阪『douceur+LIM』を『qilt+LIM』に改名
                      <br />
                      10月 資生堂『COLOR MUSE』ヘアカラー剤 開発協力
                      <br />
                      10月 アリミノ『ADOMIO』カラー剤開発協力
                      <br />
                      12月 LIMコンセプトブック『那天那女孩/A Day A Girl』を発売
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2019
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      6月
                      シンガポールラッフルズホテル『日月（TOKI）+LIM』オープン
                      <br />
                      8月 大阪博労町に独立支援店『PAPRE+LIM』オープン
                      <br />
                      9月 台湾・台北に『mimi+LIM』オープン
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2020
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      1月 中国上海『MILK+LIM』オープン
                      <br />
                      8月 中目黒『HI+LIM』オープン
                    </p>
                  </dd>
                </div>
                <div className="border-y border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2021
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      <p>
                        3月
                        心斎橋に旗艦店『LIM』とセカンドブランド『loji』をリニューアルオープン
                      </p>
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="hidden">
              <dl>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1984
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Open &quot;Cut Space Hair Do&quot; at Kintetsu Yao Ekimae in
                    Yao City, Osaka
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1987
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Move in same area, expand store, incorporate and change
                    store name to &quot;Less is More&quot;
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1991
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Establish &quot;Less Is More Ltd&quot;
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1993
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Open 2nd &quot;Less Is More&quot; store in Nishi
                    Shinsaibashi, Osaka
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1996
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      Open combination cafe/salon in Minami Senba, Osaka
                      <br />
                      Change &quot;Less Is More&quot; name to &quot;LIM
                      hair&quot;
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1999
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      Expand &quot;LIM hair&quot; space (open on 3rd floor of
                      same building)
                      <br />
                      Open new concept salon combination art gallery
                      &quot;loji&quot; in Minami Horie, Osaka
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2003
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Open top stylist salon &quot;LIM second&quot; in Minami
                    Senba, Osaka
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2005
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      Retrofit &quot;LIM hair&quot; 1st floor cafe as &quot;rec
                      space&quot;
                      <br />
                      Retrofit &quot;loji&quot; gallery sapce as &quot;rec from
                      loji&quot;
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2006
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Open &quot;LIM hair clinie&quot; in Naka-Meguro, Tokyo
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2007
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      Open &quot;doucer+LIM&quot; and &quot;APARTMENT+LIM&quot;
                      <br />
                      Open first employee-owned store &quot;sifuku+LIM&quot; in
                      Minami Senba, Osaka
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2008
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Open nail salon &quot;atelier+LIM&quot;
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2009
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      Establish &quot;LESS IS MORE Singapore&quot;
                      <br />
                      Open &quot;KIZUKI+LIM&quot; overseas venture in Singapore
                      <br />
                      Open &quot;LIM CODE&quot; in Harajuku, Tokyo
                      <br />
                      Develop &quot;+CUT&quot; wigs with from far east inc.,
                      launch sales nationwide
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2010
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      LIM25 anniversary event held at Dojima River Forum
                      <br />
                      Move and expand Singapore store KIZUKI+LIM to Raffles
                      Hotel
                      <br />
                      November: Open employee-owned &quot;botanico+LIM&quot; in
                      Kawaracho, Osaka
                      <br />
                      Develop &amp; launch original hair product line LESSMORE
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2011
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    Move and expand Tokyo &quot;LIM clinie&quot; to Minami
                    Aoyama, change store name to &quot;Dot+LIM&quot;
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2012
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      Develop, launch LESSMORE shampoo treatment
                      <br />
                      July: Open employee-owned &quot;Eurica+LIM&quot; in Kita
                      Horie, Osaka
                      <br />
                      September Open &quot;PACT+LIM&quot; in Orchard district,
                      Singapore
                      <br />
                      October Consolidate &quot;LIM hair&quot;,
                      &quot;APARTMENT+LIM&quot; and &quot;loji&quot; as
                      &quot;LIM+LIM&quot; and &quot;loji+LIM&quot; and move to
                      Shinsaibashi, Osaka
                      <br />
                      Also introduce eyelash services at &quot;atelier+LIM&quot;
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2013
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      Open nail, eyelash slaon &quot;virth+LIM&quot; in Minami
                      Aoyama, Tokyo
                      <br />
                      Open nail, eyelash salon &quot;kolmio+LIM&quot; in Minami
                      Senba, Osaka
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2014
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      Open nail salon &quot;kiyone+LIM&quot; in Singapore
                      <br />
                      November, LIM30 anniversary event held at Dojima River
                      Forum
                      <br />
                      November Open &quot;TSURU+LIM&quot; in London
                      <br />
                      December Move &quot;douceur+LIM&quot;,
                      &quot;atelier+LIM&quot; to Umeda, Osaka
                      <br />
                      Also open esthetic spa &quot;même+LIM&quot;
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2015
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      February Open LIM Nail School
                      <br />
                      October Jointly developed &quot;STAGE WORKS&quot;
                      hairspray with Shiseido
                      <br />
                      November Change name of SIngapore &quot;PACT+LIM&quot; to
                      &quot;1tto+LIM&quot;
                      <br />
                      December Open &quot;B+LIM&quot; in Singapore
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2016
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      February Open LIM Nail School TOKYO
                      <br />
                      March, launch of the LISARCH product brand
                      <br />
                      April Open &quot;nu+LIM&quot; in Omotesando, Tokyo
                      <br />
                      August Renewal open &quot;kiyone+LIM&quot; and
                      &quot;1tto+LIM&quot;
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2017
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      January, company name changed from LESS IS MORE Ltd. to
                      LESS IS MORE Co., Ltd.
                      <br />
                      January, Opened employee-owned store &quot;coya+LIM&quot;
                      in Tanimachi 6-chome, Osaka
                      <br />
                      February, LIMTOK10 anniversary event held at Shibuya
                      Hikarie Hall
                      <br />
                      August, Opened &quot;HOW+LIM&quot; in Hong Kong
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2018
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      June, Opened the nail and eyelash salon &quot;yuo
                      virth+LIM&quot; in Daikanyama, Tokyo
                      <br />
                      Relocated nail school to Daikanyama
                      <br />
                      October, Renamed &quot;douceur+LIM&quot; in Osaka to
                      &quot;qilt+LIM&quot;
                      <br />
                      October, Jointly developed &quot;COLOR MUSE&quot; hair dye
                      with Shiseido
                      <br />
                      October, Jointly developed &quot;ADOMIO&quot; hair dye
                      with Arimino
                      <br />
                      December, Released the LIM concept book &quot;A Day A
                      Girl&quot;
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2019
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      June, Opened &quot;TOKI+LIM&quot; at Raffles Hotel in
                      Singapore
                      <br />
                      August, Opened independent hair studio
                      &quot;PAPRE+LIM&quot; in Bakuromachi, Osaka
                      <br />
                      September, Opened &quot;mimi+LIM&quot; in Taipei, Taiwan
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2020
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      January, Opened &quot;MILK+LIM&quot; in Shanghai
                      <br />
                      August, Opened &quot;HI+LIM&quot; in Nakameguro
                    </p>
                  </dd>
                </div>
                <div className="border-y border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2021
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      March, Renewal opened &quot;LIM&quot; and &quot;loji&quot;
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="hidden">
              <dl>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1984
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    大阪府八尾市 近铁八尾站前“Cut Space Hair Do”开业
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1987
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    在同一站前，店面转移扩大并进行了法人化，店名更改为“LESS IS
                    MORE”
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1991
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    创立 LESS IS MORE 有限公司
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1993
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    位于大阪市 西心斋桥的第2家店铺“LESS IS MORE”开业
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1996
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      位于大阪市 南船场4丁目的带有咖啡厅的沙龙开业
                      <br />
                      店名从“LESS IS MORE”更名为“LIM hair”
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    1999
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      LIM hair 扩大规模（同一建筑内的3层开业）
                      <br />
                      位于大阪市南堀江的开设了画廊的新概念沙龙“loji”开业
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2003
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    位于南船场的顶级造型设计师沙龙“LIM second”开业
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2005
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      将 LIM hair 的 1 层改装为名为“rec space”的咖啡厅
                      <br />将 loji 的画廊空间改装为“rec from loji”
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2006
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    位于东京都中目黑的“LIM hair clinie”开业
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2007
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      “douceur+LIM”“APARTMENT+LIM”开业
                      <br />
                      位于南船场的独立支援 1 号店“sifuku+LIM”开业
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2008
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    美甲、美睫专业沙龙“atelier+LIM”开业
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2009
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      创立 LESS IS MORE Singapore
                      <br />
                      海外拓展 位于新加坡的“KIZUKI+LIM”开业
                      <br />
                      位于东京 原宿的“LIM CODE”开业
                      <br />与 From・Far・East
                      公司携手开发了假发“+CUT”并在全日本销售
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2010
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      於堂島川論壇 (堂島 RIVER FORUM) 舉辦週年紀念活動「LIM25」
                      <br />
                      新加坡“KIZUKI+LIM”转移到莱佛士酒店并扩大规模
                      <br />
                      11月 位于瓦町的独立支援店“botanico+LIM”开业
                      <br />
                      研制并销售独家护发产品“LESSMORE”
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2011
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    东京“LIM clinie”转移到南青山并扩大规模，店名改为“Dot+LIM”
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2012
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      研制并销售 “LESSMORE”洗发露、护发膏
                      <br />
                      7月 位于大阪 北堀江的独立支援店“Eurica+LIM”开业
                      <br />
                      9月 位于新加坡乌节路的“PACT+LIM”开业
                      <br />
                      10月 将“LIM hair”“APARTMENT+LIM”“loji”统合转移到大阪
                      心斋桥，“LIM+LIM”“loji+LIM”开业
                      <br />
                      同时在“atelier+LIM”增加了睫毛美容菜单
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2013
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      位于东京都南青山的美甲、美睫沙龙“virth+LIM”开业
                      <br />
                      位于大阪市南船场的美甲、美睫沙龙“kolmio+LIM”开业
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2014
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      位于新加坡的美甲沙龙“kiyone+LIM”开业
                      <br />
                      於堂島川論壇 (堂島 RIVER FORUM) 舉辦週年紀念活動「LIM30」
                      <br />
                      11月 位于伦敦的“TSURU+LIM”开业
                      <br />
                      12月 “douceur+LIM”“atelier+LIM”转移到大阪市的梅田
                      <br />
                      同时 Espa 沙龙“même+LIM”开业
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2015
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      2月 LIM NAIL SCHOOL 开校
                      <br />
                      11月 新加坡“PACT+LIM”更名为“1tto+LIM”
                      <br />
                      12月 位于新加坡的“B+LIM”开业
                      <br />
                      10月 协助开发 资生堂 &quot;STAGE WORKS&quot; 定型剂
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2016
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      2月 LIM NAIL SCHOOL TOKYO 开校
                      <br />
                      3月 產品品牌「LISARCH」開賣
                      <br />
                      4月 位于表参道「nu+LIM」开业
                      <br />
                      9月 位于福岡「tükör+LIM」开业
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2017
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      1月 公司名稱由「有限會社 LESS IS MORE」變更為「株式會社
                      LESS IS MORE」
                      <br />
                      1月 於大阪谷町六丁目開設獨立支援店「coya+LIM」
                      <br />
                      2月 於澀谷 Hikarie Hall 舉辦週年紀念活動「LIMTOK1O」
                      <br />
                      8月 香港 &quot;HOW+LIM&quot; 开业
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2018
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      6月　东京都代宫山美甲、美睫沙龙 &quot;yuo virth+LIM&quot;
                      开业
                      <br />
                      与此同时，美甲学校搬迁至代宫山
                      <br />
                      10月 大阪 &quot;douceur+LIM&quot; 改名为
                      &quot;qilt+LIM&quot;
                      <br />
                      10月 协助开发 资生堂 &quot;COLOR MUSE&quot; 染发剂
                      <br />
                      10月 协助开发 ARIMINO &quot;ADOMIO&quot; 染发剂
                      <br />
                      12月 发售 LIM概念书《那天那女孩/A Day A Girl》
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2019
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      6月 新加坡莱佛士酒店“日月（TOKI）+LIM”开业
                      <br />
                      8月 大阪博劳町独立支援店 &quot;PAPRE+LIM&quot; 开业
                      <br />
                      9月 台湾台北 &quot;mimi+LIM&quot; 开业
                    </p>
                  </dd>
                </div>
                <div className="border-t border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2020
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>
                      1月 於上海 “MILK+LIM” 开业
                      <br />
                      8月 於中目黒 “HI+LIM” 开业
                    </p>
                  </dd>
                </div>
                <div className="border-y border-[#ddd] py-[1.125rem] md:flex">
                  <dt className="mb-[.21875rem] md:flex-[0_0_8.4375rem] md:m-0 md:pr-[2em]">
                    2021
                  </dt>
                  <dd className="flex-1 text-[.8125rem] tracking-[0] leading-loose">
                    <p>3月 续订开放 &quot;LIM&quot;, &quot;loji&quot;</p>
                  </dd>
                </div>
              </dl>
            </div>
          </section>
          <ContactForm />
        </div>
        <div className="row-[2/3] col-[3/4] relative mt-[3.4375rem] lg:m-0">
          <div className="sticky top-[7.6875rem]">
            <section>
              <header className="text-[0.8125rem] tracking-[.02em] leading-[1.230769230769231] text-[#999] mb-[.75rem] md:mb-[.8125rem]">
                Contact
              </header>
              <div>
                <p>
                  レスイズモアへのお問い合わせは下記フォームよりお願致します。
                </p>
                <div className="mt-[1.875rem]">
                  <Link
                    href="#contact"
                    className="h-[3.9375rem] flex justify-center items-center border border-[#ddd] text-[9.375rem] w-full md:text-[.875rem] md:h-[3.375rem]"
                  >
                    お問い合わせ
                  </Link>
                  <Link
                    href="/overseas/"
                    className="mt-[1.125rem] h-[3.9375rem] flex justify-center items-center border border-[#ddd] text-[9.375rem] w-full md:text-[.875rem] md:h-[3.375rem]"
                  >
                    海外店舗の情報はこちら
                  </Link>
                </div>
              </div>
              <div className="hidden">
                <p>
                  Anyone wishing to contact Less Is More is welcome to do so by
                  email.
                  <br />
                  We are pleased to have feedback from customers in order to
                  help us provide better service going forward, and we are also
                  happy to answer any questions you might have.
                </p>
                <div className="mt-[1.875rem]">
                  <Link
                    href="mailto:info@lessismore.co.jp"
                    className="h-[3.9375rem] flex justify-center items-center border border-[#ddd] text-[9.375rem] w-full md:text-[.875rem] md:h-[3.375rem]"
                  >
                    CONTACT
                  </Link>
                </div>
                <p className="text-[#666] text-[.625rem] tracking-[.02em] leading-loose mt-5 mb-10 md:mb-[1.875rem]">
                  *We are unable to address inquiries about specific stores,
                  reservations, cancellations or modifications of appointments
                  here. Please make your inquiry by telephone to the store in
                  question.
                </p>
                <div className="mt-[1.875rem]">
                  <Link
                    href="/overseas/"
                    className="h-[3.9375rem] flex justify-center items-center border border-[#ddd] text-[9.375rem] w-full md:text-[.875rem] md:h-[3.375rem]"
                  >
                    OVERSEAS STORES
                  </Link>
                </div>
              </div>
              <div className="hidden">
                <p>
                  想了解 LESS IS MORE，请发邮件咨询。
                  <br />
                  为了能够向大家提供更优良的服务，我们会在参考客户发来的意见的同时，积极回应大家的问题。
                </p>
                <div className="mt-[1.875rem]">
                  <Link
                    href="mailto:info@lessismore.co.jp"
                    className="h-[3.9375rem] flex justify-center items-center border border-[#ddd] text-[9.375rem] w-full md:text-[.875rem] md:h-[3.375rem]"
                  >
                    咨询
                  </Link>
                </div>
                <p className="text-[#666] text-[.625rem] tracking-[.02em] leading-loose mt-5 mb-10 md:mb-[1.875rem]">
                  *此处不受理关于各店铺预约的咨询以及预约、取消、变更的相关事宜。请致电各店铺进行咨询。
                </p>
                <div className="mt-[1.875rem]">
                  <Link
                    href="/overseas/"
                    className="h-[3.9375rem] flex justify-center items-center border border-[#ddd] text-[9.375rem] w-full md:text-[.875rem] md:h-[3.375rem]"
                  >
                    海外門店
                  </Link>
                </div>
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
};

export default CompanyHome;
