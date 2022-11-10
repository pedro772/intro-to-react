import { useNavigate } from 'react-router-dom';

import ClassComponent from "../components/ClassComponent"
import FunctionComponent from "../components/FunctionComponent"

export default function ComponentTypes(props) {
  const navigate = useNavigate();

  return (
    <>
      <ClassComponent name={props.name.class} />
      <FunctionComponent name={props.name.function} />

      <button onClick={() => navigate("/mount")}>Mount</button>
      <button onClick={() => navigate("/update")}>Update</button>
      <button onClick={() => navigate("/unmount")}>Unmount</button>
    </>
  )
}