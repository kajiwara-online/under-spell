import ContactForm from "@/_components/ContactForm";
import Link from "next/link";

const CompanyHome = () => {
  return (
    <div className="pt-[3.9375rem] md:pt-[4.375rem] lg:pt-[5.1875rem]">
      <main className="pt-[2.875rem] pb-20 px-[1.875rem] md:text-[.8125rem] md:leading-loose md:pt-[3.75rem] md:pb-20 md:px-[3.4375rem] lg:max-w-[1206px] lg:pt-[4.6875rem] lg:pb-[9.375rem] lg:px-[10vw] lg:my-0 lg:mx-auto xl:pt-[5.688622754491018vw] xl:pb-[11.377245508982035vw] xl:px-[13.541666666666666vw]">
        <h1 className="text-[1.5rem] tracking-[.04em] leading-[1.291666666666667] mb-[2.125rem] md:text-[2.125rem] md:leading-[1.264705882352941] md:mb-[2.65625rem] lg:text-[2.25rem] lg:leading-[1.277777777777778] lg:mb-[3.90625rem]">
          PRIVACY POLICY
        </h1>
        <div>
          <p>
            株式会社レスイズモア（以下弊社とします）は、弊社が運営するポイントカードサービス及びホームページ（以下弊社ウェブサイト）等におけるお客様の個人情報の取り扱いについてその重要性を認識し法律を尊守し厳重な管理を実施してお客様のプライバシーの保護を行って参ります。
            <br />
            ※個人情報とは、直接／間接を問わず個人を特定できる情報をいいます。
            <br />
            （氏名、住所、電話番号、メールアドレス、ID、パスワード、嗜好情報、機微情報（センシティブ情報）など）また、他の情報と容易に照合でき、それによって個人を識別できる情報も含みます。
          </p>
          <h2 className="font-medium text-[.875rem] leading-[1.857142857142857] mt-[2.96875rem] mb-[.46875rem] md:text-[.9375rem] md:leading-[1.866666666666667] md:mt-[4.84375rem] md:mb-[.6875rem]">
            個人情報の収集
          </h2>
          <p>
            弊社はお客様へより良い商品・サービスを提供する目的で、お客様の個人情報を収集することがあります。お客様から個人情報をお聞きする場合には、あらかじめ、その目的をお知らせしお客様の同意のもと適切な範囲で個人情報の収集を行います。
          </p>
          <h2 className="font-medium text-[.875rem] leading-[1.857142857142857] mt-[2.34375rem] mb-[.46875rem] md:text-[.9375rem] md:leading-[1.866666666666667] md:mt-[2.3125rem] md:mb-[.6875rem]">
            個人情報の保守管理
          </h2>
          <p>
            弊社は個人情報の保護のため、個人情報管理責任者を置き社内管理体制を整え
            <br />
            1) 個人情報の外部への漏洩を防ぎ
            <br />
            2) 外部からの不正アクセスに対して安全策を実施し
            <br />
            3) 個人情報の取り扱いに関与する委託企業に対し適切な管理を行い
            <br />
            お客様の個人情報の保守管理を実現します。
          </p>
          <h2 className="font-medium text-[.875rem] leading-[1.857142857142857] mt-[2.34375rem] mb-[.46875rem] md:text-[.9375rem] md:leading-[1.866666666666667] md:mt-[2.3125rem] md:mb-[.6875rem]">
            個人情報の開示
          </h2>
          <p>
            弊社は原則としてお客様の同意なしに個人情報を第三者に開示することはいたしません。
            <br />
            但し以下の場合には例外として個人情報を開示することがあります。
            <br />
            1) お客様の事前の同意・承認を得た場合
            <br />
            2) 統計的な資料として、お客様個人を識別できない状態に加工した場合
            <br />
            3)
            あらかじめ弊社との間で機密保持契約を締結している企業（例えば、サービスを提供するための業務委託先）等に必要な限度において開示する場合
            <br />
            4) その他法令等により提供が必要とされる場合
          </p>
          <h2 className="font-medium text-[.875rem] leading-[1.857142857142857] mt-[2.34375rem] mb-[.46875rem] md:text-[.9375rem] md:leading-[1.866666666666667] md:mt-[2.3125rem] md:mb-[.6875rem]">
            個人情報に関するお問い合わせ
          </h2>
          <p>
            個人情報の取り扱いに関するご意見・ご質問などは下記までお問い合わせください。
          </p>
          <p className="mt-[2em]">
            HEAD OFFICE
            <br />
            〒542-0081 大阪市中央区南船場4-11-19 心斎橋鉄田ビル4F
          </p>
        </div>
        <footer className="mt-[3.375rem]">
          <Link
            href="/"
            className="inline-flex items-center text-[.6875rem] tracking-[.04em] leading-[1.272727272727273] md:text-[.75rem] md:leading-[1.166666666666667] before:content-[''] before:w-[.4375rem] before:h-[.75rem] before:mr-[.9375rem] before:bg-no-repeat before:bg-center before:bg-contain before:bg-[url('data:image/svg+xml;charset=utf-8;base64,PHN2ZyBoZWlnaHQ9JzEyJyB2aWV3Qm94PScwIDAgNyAxMicgd2lkdGg9JzcnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggZD0nbTYuNjgyIDEuMDUtLjcwNy0uNzA3LTUuNjU3IDUuNjU3IDUuNjU3IDUuNjU3LjcwNy0uNzA3LTQuOTUtNC45NXonLz48L3N2Zz4=')]"
          >
            Back
          </Link>
        </footer>
      </main>
    </div>
  );
};

export default CompanyHome;
