import { useGetSpecializationsQuery } from "@features/specializations/specializationsSlice"

const AdminPanel = () => {
  const { data, isLoading, isSuccess} = useGetSpecializationsQuery();
  if(isSuccess){
    console.log(data);
  }
  return (
    <div>
      <h1>Admin Panel</h1>
    </div>
  );
};

export default AdminPanel;
