import React from "react";
import ExampleImage from "./assets/example-image.jpg";
import "./App.css";

import {
  Document,
  Page,
  Text,
  View,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

const InvoiceDocument = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>Section #1</Text>
          <Image src={ExampleImage}></Image>
        </View>
      </Page>
    </Document>
  );
};

const App = () => {
  return (
    <PDFDownloadLink document={<InvoiceDocument />} fileName="invoice.pdf">
      {({ blob, url, loading, error }) =>
        loading ? "Loading document..." : "Download now!"
      }
    </PDFDownloadLink>
  );
};

export default App;
