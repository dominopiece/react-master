import { useOutletContext, useParams } from "react-router-dom";

interface FollowerContext {
  nameOfUser: string;
}

function Followers() {
  const { userId } = useParams();
  console.log(userId);
  const { nameOfUser } = useOutletContext<FollowerContext>();
  console.log(nameOfUser);
  return <h1>{nameOfUser} Followers</h1>;
}

export default Followers;
