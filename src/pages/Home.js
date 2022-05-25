import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from "react-native";

import { styles } from "./styles";

export function Home() {
  const [newSkill, setNewSkill] = useState(); //Armazenar novas skills
  const [mySkills, setMySkills] = useState([]); //Armazenar skills

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Jones Bass</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewSkill}
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 50 }]}> mySkill </Text>

      {mySkills.map((skill) => (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
