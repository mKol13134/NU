import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
//import Course from './Course';
import TermSelector from './TermSelector';
import CourseSelector from './CourseSelector';
import { terms, termMap, getCourseTerm } from '../utils/course';


//const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
//const terms = Object.values(termMap);

const CourseList = ({ courses, view }) => {
  const [selectedTerm, setSelectedTerm] = useState('Fall');
  const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

  return(
    <View>
      <TermSelector terms ={terms} selectedTerm={selectedTerm} setSelectedTerm = {setSelectedTerm} />
        <ScrollView>
          <CourseSelector courses={termCourses} view = {view} />
        </ScrollView>
    </View>
  );
};
  const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',///
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
  termSelector: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});

export default CourseList;


