import './Home.scss'
import { useEffect, useState } from "react";
import useAuthentication from "../../hooks/useAuthentication";

// Components
import { Button } from "@material-ui/core";
import AppBar from '../../components/AppBar/AppBar';
import DenseTable from "../../components/Table/Table";
// import DenseTable from ''

const Home = () => {
  const [token] = useAuthentication()
  const [btn, setBtn] = useState();
  const [page, setPage] = useState();
  const [arr, setArr] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const btns = new Array(btn).fill(1);
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://face.ox-sys.com/variations`, {
        method: "POST",
        body: JSON.stringify({
          size: 20,
          page: page,
          stock: {
            exist: true,
            location: [42],
          },
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const dataa = await res.json();
      console.log(dataa);
      setBtn(dataa.total_count ? Math.ceil(dataa.total_count / 10) : 1);
      setArr(dataa.items);
      setFilterArr(dataa.items);
    })();
  }, [page, token]);

  const pageNation = (evt) => {
    setPage(Number(evt.currentTarget.dataset.id));
  };
  return (
     
      <div className="home">
            <AppBar setFilterArr={setFilterArr} arr={arr} />
                <div className="home-body">
                        {filterArr?.length > 0 && <DenseTable rows={filterArr} />}
                            {btns?.length > 0 && (
                            <div className="home-btns">
                                {btns.map((item, i) => (
                                   
                                        <Button key={i} data-id={i + 1} onClick={pageNation} className="btn">
                                            {i + 1}
                                        </Button>

                                    
                                ))}
                            </div>
                    )}
             </div>
    </div>
   
  );
};
export default Home;
