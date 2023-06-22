import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { item } from '../../Board/type';
import { useDispatch } from 'react-redux';
import { setPreview } from '../store/InputStore';

function Editor({ item }: { item: item }) {
  const dispatch = useDispatch();

  const handleTextChange = (value: string) => {
    dispatch(setPreview(value));
  };

  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  const formats = [
    //'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={item.question}
      onChange={handleTextChange}
    />
  );
}

export default Editor;
