import {useEffect,  useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import api from '../utils/api';

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import EditorComponent from "../components/EditorComponent";

const WritePage = () => {


    return (
        <EditorComponent url="/board/write" ></EditorComponent>
        )

}

export default WritePage;