import React from "react";
import ExampleImage from "./example-image.jpg";

import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  view: {
    backgroundColor: "yellow",
    border: "4px solid red",
    display: "flex",
    fontSize: "12px",
  },
});

const InvoiceDocument = () => {
  return (
    <div>
      <Document>
        <Page size="A4">
          <View style={styles.view}>
            <Text>Section #1</Text>
            <Image src={ExampleImage}></Image>
          </View>
        </Page>
      </Document>
    </div>
  );
};

export default InvoiceDocument;
