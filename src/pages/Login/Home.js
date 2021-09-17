import "./Home.css";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

// Components
import { Button } from "@material-ui/core";
import Header from "../../components/Header/Header";
import DenseTable from "../../components/Table/Table";

const Home = () => {
  const [token] = useAuth();
  const [btn, setBtn] = useState(1);
  const [page, setPage] = useState(1);
  const [arr, setArr] = useState([]);
  const [filterArr, setFilterArr] = useState([]);
  const btns = new Array(btn).fill(7);
  useEffect(() => {
    (async () => {
      const res = await fetch(`https://face.ox-sys.com/variations`, {
        method: "POST",
        body: JSON.stringify({
          size: 21,
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
      setBtn(dataa.total_count ? Math.ceil(dataa.total_count / 21) : 1);
      setArr(dataa.items);
      setFilterArr(dataa.items);
    })();
  }, [page, token]);

  const pageNation = (evt) => {
    setPage(Number(evt.currentTarget.dataset.id));
  };
  return (
    <div className="home">
      <Header setFilterArr={setFilterArr} arr={arr} />

      {filterArr?.length > 0 && <DenseTable rows={filterArr} />}

      {btns?.length > 0 && (
        <div className="btns">
          {btns.map((item, i) => (
            <Button key={i} data-id={i + 1} onClick={pageNation}>
              {i + 1}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
export default Home;
