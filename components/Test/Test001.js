import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Test001 = () => {
  return (
    {strength === "m" && dosimG !== 0 && dosIµG !== "" ? (
        <View>
          {drugName === "Atropin" ? (
            dosMikro > 1 ? (
              <Text>ge 1 ml</Text>
            ) : (
              <Text>ge {dosMikro} ml</Text>
            )
          ) : (
            <Text>ge {dosMikro} ml</Text>
          )}
        </View>
      ) : strength === "m" && dosimG !== 0 ? (
        <View>
          {drugName === "Betapred" && dos <= 1 ? (
            <Text>ge {dos} ml</Text>
          ) : drugName === "Ondansetron" && dos <= 2 ? (
            <Text>ge {dos} ml</Text>
          ) : drugName === "Phenergan" && dos <= 0.5 ? (
            <Text>ge {dos} ml</Text>
          ) : (
            <Text>ge {dos}</Text>
          )}
        </View>
      ) : strength === "µ" && dosIµG !== "" ? (
        <Text>gee {dosMikro}</Text>
      ) : null}
    </View>
  )
}

export default Test001

const styles = StyleSheet.create({})