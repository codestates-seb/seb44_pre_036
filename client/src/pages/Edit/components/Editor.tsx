import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getItem } from '../../Board/type';
import { useDispatch } from 'react-redux';
import { setPreview } from '../store/PreviewStore';
import { setContent } from '../store/EditStore';

function Editor({ item }: { item: getItem }) {
  const dispatch = useDispatch();

  const handleTextChange = (value: string) => {
    dispatch(setPreview(value));
    dispatch(setContent({ content: value }));
  };

  const modules = {
    toolbar: [
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
      defaultValue={item.content}
      onChange={handleTextChange}
    />
  );
}

export default Editor;
