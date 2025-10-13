import {EditorContent, useEditor} from "@tiptap/react";
import {useEffect, useState} from "react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import {useNavigate} from "react-router-dom";
import api from "../utils/api";

const EditorComponent = ({url, id}) =>{


    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: "여기에 글을 작성하세요...",
            }),
        ],
        content: contents

    });

    const menuItems = [
        {
            label: "볼드",
            action: () => editor.chain().focus().toggleBold().run(),
            isActive: () => editor.isActive("bold"),
        },
        {
            label: "이탤릭",
            action: () => editor.chain().focus().toggleItalic().run(),
            isActive: () => editor.isActive("italic"),
        },
        {
            label: "스트로크",
            action: () => editor.chain().focus().toggleStrike().run(),
            isActive: () => editor.isActive("strike"),
        },
        {
            label: "헤더1",
            action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
            isActive: () => editor.isActive("heading", { level: 1 }),
        },
        {
            label: "헤더2",
            action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
            isActive: () => editor.isActive("heading", { level: 2 }),
        },
        {
            label: "• 점리스트",
            action: () => editor.chain().focus().toggleBulletList().run(),
            isActive: () => editor.isActive("bulletList"),
        },
        {
            label: "1. 숫자리스트",
            action: () => editor.chain().focus().toggleOrderedList().run(),
            isActive: () => editor.isActive("orderedList"),
        },
        {
            label: "</>",
            action: () => editor.chain().focus().toggleCodeBlock().run(),
            isActive: () => editor.isActive("codeBlock"),
        },
        {
            label: "인용구",
            action: () => editor.chain().focus().toggleBlockquote().run(),
            isActive: () => editor.isActive("blockquote"),
        },
    ];

    useEffect(() => {


        id && api.get(`/board/detail/${id}`).then(e =>{
                setTitle(e.data.title);
                setContents(e.data.contents);
                editor?.commands.setContent(e.data.contents);
        }

        )

    },  [id, editor]);


    const navigate = useNavigate();

    const handleSubmit = () => {
        const editorContent = editor?.getHTML();

        if(title.trim() !== "" && editorContent.trim() !== ""){
            const finalUrl = id ? `${url}/${id}` : url;
            id ? api.put(finalUrl, {title, contents})
                .then(e => navigate("/board")) : api.post(finalUrl, {title:title, contents:editorContent})
                .then(e => navigate("/board"))
        }else{
            alert("제목 또는 내용은 빈칸이 아니어야 합니다!")
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto p-4 space-y-4">
            {/* 제목 입력 */}
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목을 입력하세요"
                className="w-full border rounded px-3 py-2 text-lg font-semibold focus:outline-none focus:ring-2 prose"
            />


            {/* 본문 에디터 */}

            <EditorContent editor={editor}  className=" border rounded p-3 overflow-auto h-[200px] max-w-none focus:border-none; !focus:outline-none" />

            {/* 툴바 (예시: Bold, Italic, List) */}
            <div className="flex gap-2">
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        onClick={item.action}
                        className={`px-2 py-1 rounded ${
                            item.isActive() ? "bg-blue-500 text-white" : "bg-gray-200"
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </div>

            {/* 등록 버튼 */}
            <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600"
            >
                게시글 등록
            </button>
        </div>

    )
}

export default EditorComponent;