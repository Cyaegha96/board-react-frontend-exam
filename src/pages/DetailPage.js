
import {useEffect,  useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import api from '../utils/api';
const DetailPage = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [post, setPost]= useState({
        id: "", title:"", writer:"", contents:"", write_date:""
    })

    useEffect(()=> {
            api.get(`/board/detail/${id}`)
                .then(e => {
                    console.log(e);
                    setPost(e.data)
                })
        }
     , []);

    const handleDelete = () => {
        api.delete(`/board/delete/${id}`).then(
            navigate("/board")
        )
    }

    const handleUpdate = () => {
        navigate(`/board/update/${id}`)
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            {/* 게시물 제목 */}
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

            {/* 작성자 / 날짜 */}
            <div className="text-gray-500 text-sm mb-6">
                작성자: {post.writer} | {post.write_date}
            </div>

            {/* 게시물 내용 */}
            <div className="bg-white p-6 rounded-md shadow mb-6 whitespace-pre-wrap h-300 min-h-64"
                 dangerouslySetInnerHTML={{ __html: post.contents }}>

            </div>

            {/* 버튼 영역 */}
            <div className="flex gap-2 mb-8">
                <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    수정
                </button>
                <button onClick={handleDelete} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    삭제
                </button>
                <Link to="/board"><button >
                    목록
                </button></Link>
            </div>

        </div>
    )
}

export default DetailPage;