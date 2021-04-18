/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*comment*/

import React, {useState} from 'react';
import {
  Button,
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const App = () => {

  const[name, setName] = useState('');
  const[submitted, setSubmitted] = useState(false);

  const onPressHandler = () => {
    setSubmitted(!submitted)

  }


  // const [name, setName] = useState('Shafee');

  // const [session, setSession] = useState({number: 6, title: 'state'});

  // const [current, setCurrent] = useState(true);
  // const [incr, setIncr] = useState(0);

  // const[Items, setItems] = useState([
  //   {key: '1', val: 'Item 1'},
  //   {key: '2', val: 'Item 2'},
  //   {key: '3', val: 'Item 3'},
  //   {key: '4', val: 'Item 4'},
  //   {key: '5', val: 'Item 5'},
  //   {key: '6', val: 'Item 6'},
  // ]);


  //FlatList data
  // const[Items, setItems] = useState([
  //   { val: 'Item 1'},
  //   { val: 'Item 2'},
  //   { val: 'Item 3'},
  //   { val: 'Item 4'},
  //   { val: 'Item 5'},
  //   { val: 'Item 6'},
  // ]);

  // const DATA=[
  //   {
  //     title: 'T1',
  //     data:['I11', 'I12'],
  //   },
  //   {
  //     title: 'T2',
  //     data:['I2', 'I22'],
  //   },
  //   {
  //     title: 'T3',
  //     data:['I31', 'I32'],
  //   },
  //   {
  //     title: 'T4',
  //     data:['I41', 'I42'],
  //   },
  // ]

  // const[Refreshing, setRefreshing] = useState(false);

  // // const onRefresh = () => {
  // //   setRefreshing(true);
  // //   setItems([...Items, {val: "New item"}]);
  // //   setRefreshing(false);
  // // }

  // const [Sections, setSections] = useState([
  //   {
  //     title: 'Title 1',
  //     data: ['Item 1-1', 'Item 1-2'],
  //   },
  // ]);
  // const onRefresh = () => {
  //   setRefreshing(true);
  //   const adding_index = Sections.length + 1;
  //   setSections([...Sections,
  //   {
  //     title: 'Title ' + adding_index,
  //     data:
  //       [
  //         'Item ' + adding_index + '-1',
  //         'Item ' + adding_index + '-2'
  //       ],
  //   }
  //   ]);
  //   setRefreshing(false);
  // }
  // const onClickHandler = () =>{
  //   setName('Update on my button clicked')
  //   setSession({number: 7, title: 'updated'})
  //   setCurrent(false)
  //   setIncr(incr+1)
  // };
//   return (
//     <View style={styles.body}>
//       <Text style={styles.text}>{name}</Text>
//       <Text style={styles.text}>{incr}</Text>
//       <Text style={styles.text}>Session number: {session.number} and Title: {session.title}</Text>
//       <Text style={styles.text}>{current ? 'Current session' : 'next Session'}</Text>
//       <View style={styles.button}>
//       <Button title="Click Me!" onPress={onClickHandler}></Button>
//       </View>
//       <ScrollView 
//       refreshControl={
//         <RefreshControl
//           refreshing={Refreshing}
//           onRefresh={onRefresh}
//           colors={['#ff0000']}
//         />
//       }>
//       {
//         Items.map((object) => {
//           return (
//             <View key={object.key}>
//               <Text style={styles.text}>{object.val}</Text>
//             </View>
//         )
//         }) 
//       }
//       </ScrollView>
//     </View>
    


//     <FlatList
//     keyExtractor={(item,index) => index.toString()}
//       data={Items}
//       renderItem={({item}) => (
//               <View>
//               <Text style={styles.text}>{item.val}</Text>
//             </View>
//       )}
//       refreshControl={
//             <RefreshControl
//               refreshing={Refreshing}
//               onRefresh={onRefresh}
//               colors={['#ff0000']}
//             />
//       }
//     />
//   );
// };

// return (
//   <SectionList
//     keyExtractor={(item, index) => index.toString()}
//     sections={Sections}
//     renderItem={({ item }) => (
//       <View>
//         <Text style={styles.text}>{item}</Text>
//       </View >
//     )}
//     renderSectionHeader={({ section }) => (
//       <View>
//         <Text style={styles.text}>{section.title}</Text>
//       </View>
//     )}
//     refreshControl={
//       < RefreshControl
//         refreshing={Refreshing}
//         onRefresh={onRefresh}
//       />
//     }
//   />
// );
  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput 
      style={styles.input}
      placeholder='Hero alam'
      onChangeText={(value) => setName(value)}/>
      <Button
        title={submitted ? 'Clear' : 'Submit'}
        onPress={onPressHandler}
        color='#ff000f'
      />
      <TouchableOpacity
      onPress={onPressHandler}>
        <Text style={styles.text}>

        {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity>
      {
        submitted?
        <Text style={styles.text}>
          Your name is: {name}
        </Text>
        :
        null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    margin: 10
  },
  button: {
    width: 200,
    height: 100,
  },
  input: {
    width: 200,
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 10
  }
})

export default App;
