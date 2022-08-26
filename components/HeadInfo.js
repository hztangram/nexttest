import Head from "next/head"
import Link from "next/link"

const HeaderInfo = ({ title, keyword, contents }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta content={contents} />
    </Head>
  )
}
HeaderInfo.defaultProps = {
  title: "넥스트 제이에스 타이틀",
  keyword: "넥스트 제이에스 키워드",
  contents: "넥스트 제이에스 콘텐트",
}

export default HeaderInfo
