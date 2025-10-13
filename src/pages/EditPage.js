import EditorComponent from "../components/EditorComponent";
import { useParams } from "react-router-dom";

const EditPage = () => {

const {id}= useParams();
console.log(id);

return (
    <EditorComponent url='/board/update' id={ id}  ></EditorComponent>
)

}

export default EditPage;