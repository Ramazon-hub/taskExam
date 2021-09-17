import "./Table.scss";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 570,
  },
  body: {
    background: "#070707",
  },
  color: {
    color: "#F0860C",
    fontWeight: "bold",
    fontSize : '14px'

  },
  herader: {
    color: "#000",
    background: "#fff",
    fontWeight: "bold",
  },
});

const DenseTable = ({ rows }) => {
  const classes = useStyles();

  return (
    <div className="box">
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
              <TableRow>
                  <TableCell className={classes.herader}>Product ID</TableCell>
                  <TableCell className={classes.herader}>Name</TableCell>
                  <TableCell className={classes.herader} >
                    Last update time
                  </TableCell>
                  <TableCell className={classes.herader} >
                    UZS
                  </TableCell>
                  <TableCell className={classes.herader} >
                    USD
                  </TableCell>
                  <TableCell className={classes.herader} >
                    EUR
                  </TableCell>
                  <TableCell className={classes.herader} >
                    Supplier
                  </TableCell>
              </TableRow>
         </TableHead>
         <TableBody className={classes.body}>
              {rows.map((row, i) => (
                  <TableRow key={row.id}>
                        <TableCell className={classes.color} component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell className={classes.color} component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell className={classes.color} align="right">
                          {row.lastUpdateTime}
                        </TableCell>
                        <TableCell className={classes.color} align="right">
                          {
                            row.importRecord.stockSellPrice.UZS ? row.importRecord.stockSellPrice.UZS  : ''
                          }
                        </TableCell>
                        <TableCell className={classes.color} align="right">
                          {
                            row.importRecord.stockSellPrice.USD ? row.importRecord.stockSellPrice.USD  + ' $' : ''
                          }
                        </TableCell>
                        <TableCell className={classes.color} align="right">
                          {
                            row.importRecord.stockSellPrice.EUR ? row.importRecord.stockSellPrice.EUR  + ' €' : ''
                          }
                        </TableCell>
                        <TableCell className={classes.color} align="right">
                          {row.supplier ? row.supplier : ""}
                        </TableCell>
                  </TableRow>
              ))}
         </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default DenseTable;
