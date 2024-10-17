const User=({data})=>{
  const {name,email,phone,username,website}=data;
  return(
    <>
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{username}</td>
      <td>{website}</td>
    </tr>
    </>
  )
}
export default User;