/* eslint-disable prettier/prettier */
import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
  return (
    <TouchableOpacity 
        style={styles.buttonSkill} 
        {...rest}>

      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1E45",
    padding: 15,
    borderRadius: 20,
    margin: 5,
    alignItems: "center",
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});
