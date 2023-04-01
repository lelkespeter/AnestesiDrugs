import {Pressable, StyleSheet, Text, View} from "react-native";
import React from "react";

import {appStyles} from "../constants/myStyles";

const LmItem = ({id, name, styrka, recept, dosimG, dosIµG, obs}) => {
  const w = 22;
  const unit = styrka.charAt(3);

  const getMangd = (styrka, dosimG, dosIµG, unit) => {
    const parsedStyrka = parseFloat(styrka);
    let mangd = parsedStyrka;

    if (dosimG && unit !== "µ") {
      return mangd;
    } else if (dosIµG && unit !== "µ") {
      return mangd * 1000;
    } else if (dosIµG && unit === "µ") {
      return mangd;
    }

    return mangd / w;
  };
  // console.log(getMangd);

  return (
    <View style={styles.listContainer}>
      <View style={{flexDirection: "row"}}>
        <View>
          <Text>{name}</Text>
        </View>
        <View style={appStyles.styrka}>
          {styrka && styrka.length > 0 ? <Text>{styrka}</Text> : null}
        </View>
      </View>
      {recept && recept.length > 0 ? <Text>spädning: {recept}</Text> : null}

      {dosimG != null && dosimG !== "" ? (
        <View>
          <Text>dosering: {dosimG} mg/kg</Text>
          <Text>dvs {(dosimG * w).toFixed(2)} mg</Text>
        </View>
      ) : null}
      {dosIµG != null && dosIµG !== "" ? (
        <View>
          <Text>dosering: {dosIµG} µg/kg</Text>
          <Text>dvs {(dosIµG * w).toFixed(2)} µg</Text>
        </View>
      ) : null}
      {dosIµG != null && dosIµG !== "" ? (
        <Text>
          {(() => {
            let dose = (dosIµG / getMangd(styrka, dosimG, dosIµG, unit)) * w;
            console.log(`Initial dose: ${dose}`);
            if (name === "Betapred" || name === "Atropin") {
              dose = Math.min(dose, 1);
              console.log(`Adjusted dos for Betapred/Atropin: ${dose}`);
            } else if (name === "Ondansetron") {
              dose = Math.min(dose, 2);
              console.log(`Adjusted dose for Ondansetron: ${dose}`);
            } else if (name === "Phenergan") {
              dose = Math.min(dose, 0.5);
              console.log(`Adjusted dose for Phenergan: ${dose}`);
            } else if (dose >= 3 && dose <= 10) {
              console.log(`Adjusted dose for dos >= 3 and dose <= 10: ${dose}`);
              return (Math.round(dose * 5) / 5).toFixed(1);
            } else if (dose > 1 && dose < 3) {
              console.log(`Adjusted dose between 1 & 3: ${dose}`);
              return dose.toFixed(1);
            } else {
              console.log("Adjusted for other cases: ", dose);
              return dose.toFixed(2);
            }
            console.log("Final dose: ", dose);
            return dose.toFixed(1) + " ml";
          })()}
        </Text>
      ) : null}

      {dosimG != null && dosimG !== "" ? (
        <View style={{flexDirection: "row"}}>
          <View>
            <Text>ge</Text>
          </View>
          <View style={{marginHorizontal: 3}}>
            <Text>
              {(() => {
                let dose =
                  (dosIµG / getMangd(styrka, dosimG, dosIµG, unit)) * w;
                console.log(w);
                if (name === "Betapred" || name === "Atropin") {
                  dose = Math.min(dose, 1);
                  console.log("Adjusted dose for Betapred/Atropin:", dose);
                } else if (name === "Ondansetron") {
                  dose = Math.min(dose, 2);
                  console.log(`Adjusted dose for Ondansetron:`, dose);
                } else if (name === "Phenergan") {
                  dose = Math.min(dose, 0.5);
                  console.log("Adjusted dose for Phenergan: ", dose);
                } else if (dose >= 3 && dose <= 10) {
                  console.log(
                    "Adjusted dose for for dos >= 3 and dose <= 10: ",
                    dose
                  );
                  return (Math.round(dose * 5) / 5).toFixed(1);
                } else if (dose > 1 && dose < 3) {
                  console.log("Adjusted dose between 1 & 3: ", dose);
                  return dose.toFixed(1);
                } else {
                  console.log("Adjusted for other cases: ", dose);
                  return dose.toFixed(2);
                }
                console.log("Final dose: ", dose);
                return dose.toFixed(1) + " ml";
              })()}
            </Text>
          </View>
          <View>
            <Text>mL iv</Text>
          </View>
        </View>
      ) : null}

      {obs && obs.length > 0 ? (
        <Text style={styles.obsText}>OBS!: {obs}</Text>
      ) : null}
    </View>
  );
};

export default LmItem;

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    borderWidth: 1,
    marginVertical: 11,
    marginHorizontal: 13,
    padding: 3,
  },
  obsText: {
    color: "red",
    fontFamily: "open-sans-bold",
    fontSize: 12,
  },
});
