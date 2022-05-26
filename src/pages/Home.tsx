/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, FlatList } from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string,
  name: string,
}

export function Home() {
  const [newSkill, setNewSkill] = useState(); //Armazenar novas skills
  const [mySkills, setMySkills] = useState<SkillData[]>([]); //Armazenar skills
  const [gretting, setGretting] = useState(''); //Armazenar skills

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
      setMySkills(oldSate => oldSate.filter(
        skill => skill.id !== id
      ))   
  }


  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGretting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Afternoon');
    } else {
      setGretting('Goog Nigth');
    }
  }, [mySkills]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Jones Bass</Text>

      <Text style={styles.colorText}>{gretting}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}> mySkill </Text>

      <FlatList // renderiza poucos itens de cada vez - ScrollView rederiza todos
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => 
       
        <SkillCard 
          skill={item.name} 
          onPress={() => handleRemoveSkill(item.id)}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70,
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1E25',
    color: 'FFF',
    fontSize: 18,
    marginTop: 30,
    borderRadius: 7,
  },
  colorText: {
    color: 'white',
  },
});
