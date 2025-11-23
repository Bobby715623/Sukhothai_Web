import React from "react";
import NextMatch from '../components/NextMatch.js';
import News from "./News.js";
import Table from "./Table.js";

export default function Home() {
  return (
    <div>
      <div style={{ marginTop: 10}}>
        <NextMatch heading="LATEST NEWS"/>
      </div>
        <div style={{ marginTop: -100}}>
          <News limit={3} heading="LATEST NEWS" />
        </div>
        <div style={{ marginTop: -100}}>
          <Table />
      </div>
    </div>
    
  );
}