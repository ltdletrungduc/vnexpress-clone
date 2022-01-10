import { unwrapResult } from '@reduxjs/toolkit'
import { path } from 'constant/path'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPost } from 'reducers/post.slice'
import { getIdPostFromURL } from 'utils/helpers'

import * as S from './styled'

function PostDetail() {
  const { postId } = useParams()
  const [post, setPost] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    const _id = getIdPostFromURL(postId)
    dispatch(getPost(_id))
      .then(unwrapResult)
      .then(res => {
        setPost(res)
      })
  }, [postId, dispatch])
  return (
    <S.PostDetail>
      <S.PostDetailContainer className="container">
        {post && (
          <S.LeftCol className="col-left">
            <S.PostHeader>
              <S.PostMeta>
                <S.PostCategory to={`${path.category}/${post.category}`}>
                  {post.category}
                </S.PostCategory>
                <S.PostCreateTime>
                  Thứ hai, 1/1/2000, 00:00 (GMT+7)
                </S.PostCreateTime>
              </S.PostMeta>
              <S.PostTitle>{post.title}</S.PostTitle>
              <S.PostShortIntro>{post.description}</S.PostShortIntro>
            </S.PostHeader>
            <S.PostContent>
              <img src={post.image} alt="" />
              <div className="mock-text">
                <p>
                  Thứ Ba là đến ngày điều chỉnh giá xăng dầu theo chu kỳ tính
                  toán mới của liên Bộ Công Thương - Tài chính, tức{' '}
                  <a href="#">10 ngày điều chỉnh một lần</a>, áp dụng từ
                  2/1/2022.
                </p>
                <p>
                  Dữ liệu của Bộ Công Thương chưa cập nhật giá xăng dầu thế giới
                  theo chu kỳ tính toán mới. Tuy nhiên, theo các doanh nghiệp
                  đầu mối nhập khẩu, giá mặt hàng này đã tăng 5-6% so với kỳ
                  điều hành trước đó.
                </p>
                <p>
                  Chia sẻ với <em>VnExpress,</em> giám đốc một công ty đầu mối
                  xăng dầu ở TP HCM cho biết, giá dầu thô thế giới liên tục leo
                  dốc do thông tin nguồn cung của Mỹ sụt giảm. Tuần qua, dầu
                  Brent tăng 5,2% trong khi dầu WTI tăng 5% - mức cao nhất kể từ
                  cuối tháng 11. Trong tuần, đã có thời điểm dầu thô Brent được
                  giao dịch ở mức trên 82 USD một thùng và dầu thô WTI trên 80
                  USD một thùng.
                </p>
                <p>
                  "Với sức ép của giá dầu thế giới, giá xăng thành phẩm nhập từ
                  các thị trường Singapore cũng leo thang. Do đó, kỳ này nếu
                  không trích hoặc sử dụng Quỹ bình ổn, giá xăng, dầu có thể
                  đồng loạt tăng 500-700 đồng một lít", giám đốc doanh nghiệp
                  đầu mối TP HCM này nói.
                </p>
                <p>
                  Trong khi đó, lãnh đạo một doanh nghiệp đầu mối xăng dầu ở Hà
                  Nội cho rằng, để bình ổn giá dịp cận Tết Nguyên đán nhà điều
                  hành có thể áp dụng phương án vừa sử dụng Quỹ vừa tăng giá nên
                  mức tăng sẽ chỉ quanh mức 300-400 đồng một lít.
                </p>
                <p>
                  Tại kỳ điều hành ngày 25/12, mỗi lít xăng E5 RON 92 tăng 470
                  đồng, RON 95 tăng 490 đồng, dầu tăng tối đa 240 đồng một lít.
                </p>
                <p>
                  Sau điều chỉnh của liên Bộ Công Thương - Tài chính, mỗi lít
                  giá xăng dầu bán lẻ trong nước với xăng E5 RON 92 là 22.550
                  đồng; RON 95 là 23.290 đồng; Dầu hoả là 16.510 đồng; Dầu
                  diesel là 17.570 đồng...
                </p>
                <p>
                  Ở kỳ điều hành này, nhà chức trách không chi sử dụng Quỹ bình
                  ổn với tất cả mặt hàng xăng, dầu. Thay vào đó, mỗi lít xăng E5
                  RON 92 sẽ được trích 100 đồng vào Quỹ bình ổn; xăng RON 95 là
                  550 đồng. Các mặt hàng dầu cũng trích vào quỹ 200-552 đồng một
                  lít, kg tuỳ loại.
                </p>
                <p>
                  Việc không chi và tăng trích Quỹ bình ổn xăng dầu được giải
                  thích nhằm bình ổn thị trường tháng cuối năm 2021 và làm tiền
                  đề cho kiểm soát lạm phát 2022; tiếp tục duy trì mức chênh hợp
                  lý giữa xăng E5 RON 92 và xăng RON 95 nhằm khuyến khích người
                  dân sử dụng xăng sinh học.
                </p>
              </div>
              <S.PostAuthor>
                <strong>Nguyễn Tiến</strong> (Theo <em>Bloomberg, Fox8</em>)
              </S.PostAuthor>
            </S.PostContent>
          </S.LeftCol>
        )}
        {post && (
          <S.RightCol className="col-right">
            <img src="https://picsum.photos/300/450.jpg" alt="" />
            <S.StyledMiniCategory categoryId={post.category} />
          </S.RightCol>
        )}
      </S.PostDetailContainer>
      <S.PostDetailContainer className="container">
        <S.LeftCol className="col-left"></S.LeftCol>
        <S.RightCol className="col-right"></S.RightCol>
      </S.PostDetailContainer>
    </S.PostDetail>
  )
}

export default PostDetail
