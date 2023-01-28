import React from "react";
import Logo from "./assets/dummy-logo.png";
import "./App.css";
import Inter from "./assets/Inter-Bold.ttf";

import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

Font.register({
  family: "Inter",
  src: Inter,
});

const colors = {
  primary: "#000000",
  secondary: "#6A6A6A",
};

const st = StyleSheet.create({
  page: {
    fontSize: 10,
    padding: "20px 40px",
  },
  view: {
    lineHeight: 1.4,
  },
  renderOnDOM: {
    width: "100%",
    height: "100vh",
  },
  logo: {
    width: 95,
  },
  type: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "right",
  },
  fontPrimary: {
    color: colors.primary,
  },
  fontSecondary: {
    color: colors.secondary,
  },
  flexCol: {
    display: "flex",
    flexDirection: "col",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
  itemsCenter: {
    alignItems: "center",
  },
  p4: {
    padding: 4,
  },
  wFull: {
    width: "100%",
  },
  gap4: {
    gap: "40px",
  },
  mb20: {
    marginBottom: 20,
  },
  mb10: {
    marginBottom: 10,
  },
  mb5: {
    marginBottom: 5,
  },
  fontBold: {
    fontFamily: "Inter",
    fontWeight: 700,
  },
  textRight: {
    textAlign: "right",
  },
});

const InvoiceDocument = () => {
  return (
    <Document>
      <Page size="A4" style={[st.page]}>
        <View style={[st.view]}>
          {/* Section Header */}
          <View style={[st.flexRow, st.itemsCenter, st.mb20]}>
            {/* Logo */}
            <View style={[st.wFull, st.flexCol, st.gap4]}>
              <Image src={Logo} style={[st.logo, st.mb10]}></Image>
              <Text style={[st.mb5, st.fontBold]}>PT. Mockup Invoice</Text>
              <Text style={([st.mb5], { maxWidth: 180 })}>
                Jl Mockup Lorem Ipsum Aja Bang
              </Text>
              <Text style={[]}>(021) 43546346</Text>
            </View>
            <Text style={[st.wFull, st.type, st.fontBold]}>INVOICE</Text>
          </View>
          {/* Section Customer */}
          <View style={[st.flexRow]}>
            <View style={[st.wFull, st.flexCol, st.gap4]}>
              <Text style={[st.mb5, st.fontSecondary]}>Customer:</Text>
              <Text style={[st.mb5, st.fontBold]}>Ramiz Azhar</Text>
              <Text style={[{ maxWidth: 180 }]}>
                Si Client Street Lorem Ipsum Aja Bang (021) 43546346
              </Text>
            </View>
            <View style={[st.wFull, st.textRight]}>
              <Text>Bill</Text>
            </View>
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
