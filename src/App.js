import React from "react";
import Logo from "./assets/logo.png";
import "./App.css";
import { useState } from "react";

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const st = StyleSheet.create({
  page: {
    fontSize: 10,
    padding: "20px 40px",
  },
  renderOnDOM: {
    width: "100%",
    height: "100vh",
  },
  logo: {
    width: 150,
  },
  flex: {
    display: "flex",
  },
  flexCol: {
    flexDirection: "col",
  },
  flexRow: {
    flexDirection: "row",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  p4: {
    padding: 4,
  },
});

const InvoiceDocument = () => {
  const [tax, setTax] = useState(100);
  return (
    <Document>
      <Page size="A4" style={[st.page]}>
        <View>
          <Image src={Logo} style={[st.logo]}></Image>
          <View>
            {tax ? <Text>Tax: {tax}</Text> : null}
            <Text>Halo semua</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

const App = () => {
  return (
    <div>
      <PDFViewer style={st.renderOnDOM}>
        <InvoiceDocument />
      </PDFViewer>
    </div>
  );
};

export default App;
