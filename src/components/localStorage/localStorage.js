import { toast } from "react-toastify";

const getStoredReadMarkList=()=>{
    const storeListStr = localStorage.getItem('read-list');
    if(storeListStr){
        const storeList= JSON.parse(storeListStr);
        return storeList;
    }
    else{
        return [];
    }
}
const addToStoredReadList =(id) =>{
  const storedList = getStoredReadMarkList();
  if(storedList.includes(id)){
    console.log(id, 'already exist')
  }
  else{
    storedList.push(id);
    const storedListStr= JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
    toast('this book is added to your read list')
  }
}
export {addToStoredReadList,getStoredReadMarkList}