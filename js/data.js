/* ============================================
   FLOOR DATA (NODES + GRAPH CONNECTIONS)
   ============================================ */

const floorData = {

  0: {
    nodes: {
      'Main Entrance': {top:340, left:210},
      'Amphitheatre': {top:170, left:100},
      'Canteen': {top:80, left:310},
      'Cafe': {top:130, left:300},
      'Civil Dept': {top:150, left:230},
      'Stairs BF': {top:230, left:230}
    },
    graph: {
      'Main Entrance':['Stairs BF','Amphitheatre','Canteen','Cafe'],
      'Amphitheatre':['Main Entrance','Civil Dept'],
      'Canteen':['Main Entrance','Cafe'],
      'Cafe':['Canteen','Main Entrance'],
      'Civil Dept':['Amphitheatre','Canteen'],
      'Stairs BF':['Main Entrance']
    }
  },

  1: {
    nodes: {
      'Maths Dept': {top:70, left:230},
      'Diploma Dept': {top:70, left:260},
      'Physics Dept': {top:210, left:240},
      'Seminar Hall': {top:70, left:60},
      'Stairs GF': {top:230, left:230}
    },

    graph: {
      'Seminar Hall': ['Stairs GF', 'Physics Dept', 'Maths Dept'],
      'Maths Dept': ['Seminar Hall'],
      'Diploma Dept': ['Maths Dept', 'Physics Dept'],
      'Physics Dept': ['Diploma Dept', 'Seminar Hall'],
      'Stairs GF': ['Seminar Hall']
    }
  },

  2: {
    nodes: {
      'Auditorium': {top:200, left:190},
      'AI&DS Dept': {top:60, left:60},
      'EC Dept': {top:70, left:280},
      'Mech Dept': {top:220, left:250},
      'Robotics Dept': {top:220, left:300},
      'KTech Lab': {top:220, left:60},
      'Stairs 1F': {top:230, left:230}
    },

    graph: {
      'Auditorium': ['KTech Lab','Stairs 1F'],
      'KTech Lab': ['Auditorium','AI&DS Dept'],
      'AI&DS Dept': ['KTech Lab','Robotics Dept'],
      'Robotics Dept': ['AI&DS Dept','EC Dept'],
      'EC Dept': ['Robotics Dept','Mech Dept'],
      'Mech Dept': ['EC Dept','Stairs 1F'],
      'Stairs 1F': ['Mech Dept','Auditorium']
    }
  },

  3: {
    nodes: {
      'MCA Dept': {top:80, left:80},
      'CCF Labs': {top:100, left:250},
      'CCP Lab': {top:150, left:250},
      'CSE Dept': {top:220, left:250},
      'Stairs 2F': {top:230, left:230}
    },

    graph: {
      'MCA Dept': ['Stairs 2F'],
      'Stairs 2F': ['MCA Dept','CCF Labs','CCP Lab'],
      'CCF Labs': ['Stairs 2F','CCP Lab','CSE Dept'],
      'CCP Lab': ['Stairs 2F','CCF Labs','CSE Dept'],
      'CSE Dept': ['CCF Labs','CCP Lab']
    }
  },

  4: {
    nodes: {
      'EEE Dept': { top: 80, left: 60 },
      '1st Year Classes': { top: 80, left: 180 },
      'MBA Dept': { top: 220, left: 250 },
      'Lecture Hall': { top: 130, left: 250 },
      'Stairs 3F': { top: 230, left: 230 }
    },

    graph: {
      'EEE Dept': ['1st Year Classes','Stairs 3F'],
      '1st Year Classes': ['EEE Dept','Lecture Hall'],
      'Lecture Hall': ['1st Year Classes','Stairs 3F'],
      'Stairs 3F': ['EEE Dept','Lecture Hall','MBA Dept'],
      'MBA Dept': ['Stairs 3F']
    }
  }
};


/* ============================================
   CROSS–FLOOR DATA
   ============================================ */

const crossFloor = {

  nodes: {
    'CSE Dept': {top: 100, left: 200},
    'EC Dept': {top: 150, left: 300},
    'AI&DS Dept': {top: 200, left: 80},
    'EEE Staff Room': {top: 70, left: 300},
    'Auditorium': {top: 250, left: 100},
    'Mech Dept': {top: 220, left: 260},
    'Stairs 1F': {top: 250, left: 230},
    'Stairs 2F': {top: 200, left: 230},
    'Stairs 3F': {top: 150, left: 230}
  },

  graph: {
    'CSE Dept': [
      'EC Dept',
      'AI&DS Dept',
      'EEE Staff Room',
      'Auditorium',
      'Mech Dept',
      'Stairs 2F'
    ],

    'EC Dept': [
      'CSE Dept',
      'EEE Staff Room',
      'Stairs 1F'
    ],

    'AI&DS Dept': [
      'CSE Dept',
      'Stairs 1F'
    ],

    'EEE Staff Room': [
      'CSE Dept',
      'EC Dept',
      'Auditorium',
      'Stairs 3F'
    ],

    'Auditorium': [
      'CSE Dept',
      'EEE Staff Room',
      'Stairs 1F'
    ],

    'Mech Dept': [
      'CSE Dept',
      'Stairs 1F'
    ],

    'Stairs 1F': [
      'EC Dept',
      'AI&DS Dept',
      'Auditorium',
      'Mech Dept',
      'Stairs 2F'
    ],

    'Stairs 2F': [
      'CSE Dept',
      'Stairs 1F',
      'Stairs 3F'
    ],

    'Stairs 3F': [
      'EEE Staff Room',
      'Stairs 2F'
    ]
  }
};


/* ========= BASE FLOOR (FLOOR 0) — FORWARD ========= */

const edgeInstruction = {

  "Main Entrance→Amphitheatre":
    "Walk 50m straight",

  "Main Entrance→Stair BF":
    "Walk 40m straight, turn right, then walk 15m straight",

  "Main Entrance→Civil Dept":
    "Walk 40m straight, turn right, walk 15m, turn left, and walk 25m straight",

  "Main Entrance→Cafe":
    "Walk 30m straight, turn right, walk 20m, then turn left and walk 30m straight",

  "Main Entrance→Canteen":
    "Walk 30m straight, turn right, walk 20m, then turn left and walk 50m straight",

  "Stair BF→Civil Dept":
    "Turn back and walk 30m straight",

  "Civil Dept→Canteen":
    "Turn left, walk 10m straight, slight right, walk 10m, then turn right and walk 10m",

  "Civil Dept→Cafe":
    "Turn right, walk 10m straight, slight right, walk 10m, then turn right and walk 20m straight",

  "Civil Dept→Stair BF":
    "Turn left and walk 40m straight",

  "Cafe→Civil Dept":
    "Turn left, walk 20m straight, turn left, walk 10m straight, turn left, walk 10m straight, then turn left",

  "Cafe→Canteen":
    "Turn left and walk 15m straight",

  "Canteen→Cafe":
    "Turn left and walk 15m straight",

  "Canteen→Civil Dept":
    "Turn right, then turn left, walk 10m straight, turn left, walk 10m straight, then turn left",


    /* ========= BASE FLOOR (FLOOR 0) — REVERSE ========= */

  "Amphitheatre→Main Entrance":
    "Walk 50m straight back",

  "Stair BF→Main Entrance":
    "Walk 15m back, turn left, then walk 40m straight back",

  "Civil Dept→Main Entrance":
    "Walk 25m back, turn right, walk 15m back, then turn left and walk 40m back",

  "Cafe→Main Entrance":
    "Walk 30m back, turn right, walk 20m back, then turn left and walk 30m back",

  "Canteen→Main Entrance":
    "Walk 50m back, turn right, walk 20m back, then turn left and walk 30m back",

  "Civil Dept→Stair BF":
    "Walk 30m straight back",

  "Canteen→Stair BF":
    "Walk 10m back, slight left, walk 50m straight back",

  "Cafe→Stair BF":
    "Walk 30m back, turn left, walk 10m back, slight left, then walk 50m back",

  "Canteen→Civil Dept":
    "Walk 10m back, turn left, walk 10m back, slight left, then walk 10m back",

  "Cafe→Civil Dept":
    "Turn right, walk 20m straight back, turn right, walk 10m back, turn right, walk 10m back, then turn right",

  "Stair BF→Civil Dept":
    "Walk 40m straight back, then turn right",

  "Civil Dept→Cafe":
    "Walk 20m back, turn left, walk 10m back, slight left, then walk 10m back",

  "Cafe→Canteen":
    "Turn left and walk 15m straight back",

  "Civil Dept→Canteen":
    "Walk 10m back, slight right, walk 10m back, turn left, walk 10m back, then turn right",

  /* ========= FLOOR 1 (GROUND FLOOR) — FORWARD ========= */

"Stairs GF→Seminar Hall":
  "Walk 60m straight, turn left, and walk 40m",

"Stairs GF→Physics Dept":
  "Walk 60m straight, turn right, and walk 10m",

"Stairs GF→Diploma Dept":
  "Walk 60m straight, turn right, and walk 10m",

"Stairs GF→Maths Dept":
  "Walk 60m straight, turn left, and walk 10m",

"Seminar Hall→Physics Dept":
  "Walk 50m straight, turn right, and walk 60m",

"Seminar Hall→Diploma Dept":
  "Walk 50m straight",

"Seminar Hall→Maths Dept":
  "Walk 40m straight",

"Maths Dept→Physics Dept":
  "Walk 10m straight, turn right, and walk 60m",

"Maths Dept→Diploma Dept":
  "Walk 20m straight",

"Maths Dept→Seminar Hall":
  "Walk 40m straight",

"Physics Dept→Diploma Dept":
  "Walk 60m straight, turn right, and walk 10m",

"Physics Dept→Maths Dept":
  "Walk 60m straight, turn left, and walk 10m",

"Physics Dept→Seminar Hall":
  "Walk 60m straight, turn left, and walk 40m",

"Diploma Dept→Physics Dept":
  "Walk 10m straight, turn left, and walk 60m",

"Diploma Dept→Maths Dept":
  "Walk 20m straight",

"Diploma Dept→Seminar Hall":
  "Walk 50m straight",

"Diploma Dept→Stairs GF":
  "Walk 10m straight, turn left, and walk 60m",

  /* ========= FLOOR 1 (GROUND FLOOR) — REVERSE ========= */

"Physics Dept→Stairs GF":
  "Turn left and walk 10m straight",

"Diploma Dept→Stairs GF":
  "Walk 10m straight back, turn left, and walk 60m straight",

"Maths Dept→Stairs GF":
  "Walk 10m straight back, turn right, and walk 60m straight",

"Seminar Hall→Stairs GF":
  "Walk 40m straight back, turn right, and walk 60m straight",

"Diploma Dept→Physics Dept":
  "Walk 10m straight back, turn left, and walk 60m straight",

"Maths Dept→Physics Dept":
  "Walk 10m straight back, turn right, and walk 60m straight",

"Seminar Hall→Physics Dept":
  "Walk 40m straight back, turn right, and walk 60m straight",

"Physics Dept→Diploma Dept":
  "Walk 60m straight back, turn left, and walk 10m straight",

"Maths Dept→Diploma Dept":
  "Walk 20m straight back",

"Seminar Hall→Diploma Dept":
  "Walk 50m straight back",

"Stairs GF→Diploma Dept":
  "Walk 60m straight back, turn right, and walk 10m straight",

"Physics Dept→Maths Dept":
  "Walk 60m straight back, turn left, and walk 10m straight",

"Diploma Dept→Maths Dept":
  "Walk 20m straight back",

"Seminar Hall→Maths Dept":
  "Walk 40m straight back",

"Stairs GF→Maths Dept":
  "Walk 60m straight back, turn left, and walk 10m straight",

"Maths Dept→Seminar Hall":
  "Walk 40m straight back",

"Diploma Dept→Seminar Hall":
  "Walk 50m straight back",

"Physics Dept→Seminar Hall":
  "Walk 60m straight back, turn left, and walk 50m straight",

"Stairs GF→Seminar Hall":
  "Walk 60m straight back, turn left, and walk 50m straight",

  /* ========= FLOOR 2 (FIRST FLOOR) — FORWARD ========= */

"Stairs 1F→Mech Dept":
  "Walk 10m straight",

"Stairs 1F→EC Dept":
  "Walk 30m straight",

"Stairs 1F→Robotics Dept":
  "Walk 40m straight",

"Stairs 1F→AI&DS Dept":
  "Walk 60m straight and turn left and walk 60m straight",

"Stairs 1F→Auditorium":
  "Walk 20m left",

"Stairs 1F→KTech Lab":
  "Walk 50m left and turn right and walk 20m straight",


"Mech Dept→Stairs 1F":
  "Turn left walk 10m straight",

"Mech Dept→EC Dept":
  "Turn right walk 40m straight",

"Mech Dept→Robotics Dept":
  "Turn right walk 40m straight",

"Mech Dept→AI&DS Dept":
  "Walk 50m straight and turn left and walk 60m straight",

"Mech Dept→Auditorium":
  "Turn left walk 10m straight then turn right go 10m straight",

"Mech Dept→KTech Lab":
  "Walk 40m straight and turn right and walk 20m straight",


"EC Dept→Stairs 1F":
  "Turn left walk 40m straight",

"EC Dept→Mech Dept":
  "Turn left walk 40m straight",

"EC Dept→Robotics Dept":
  "Turn right walk 10m straight",

"EC Dept→AI&DS Dept":
  "Walk 20m straight and turn left and walk 60m straight",

"EC Dept→Auditorium":
  "Walk 40m straight and turn right and walk 20m straight",

"EC Dept→KTech Lab":
  "Walk 40m straight and turn right and walk 40m straight and turn right and walk 10m straight",


"Robotics Dept→Stairs 1F":
  "Walk 40m straight",

"Robotics Dept→Mech Dept":
  "Walk 40m straight",

"Robotics Dept→EC Dept":
  "Walk 10m straight",

"Robotics Dept→AI&DS Dept":
  "Walk 20m straight and turn left and walk 60m straight",

"Robotics Dept→Auditorium":
  "Walk 40m straight and turn right and walk 10m straight",

"Robotics Dept→KTech Lab":
  "Walk 40m straight and turn right and walk 40m and turn right and walk 10m straight",


"AI&DS Dept→Stairs 1F":
  "Walk 60m straight and turn right and walk 60m straight",

"AI&DS Dept→Mech Dept":
  "Walk 60m straight and turn right and walk 60m straight",

"AI&DS Dept→EC Dept":
  "Walk 60m straight and turn right and walk 40m straight",

"AI&DS Dept→Robotics Dept":
  "Walk 60m straight and turn right and walk 30m straight",

"AI&DS Dept→Auditorium":
  "Walk 60m straight and turn right and walk 60m straight and turn right and walk 10m straight",

"AI&DS Dept→KTech Lab":
  "Walk 60m straight and turn right and walk 60m straight and turn right and walk 40m straight and turn right and walk 10m straight",


"Auditorium→Stairs 1F":
  "Walk 10m straight",

"Auditorium→Mech Dept":
  "Walk 10m straight",

"Auditorium→EC Dept":
  "Walk 10m straight and turn left and walk 40m straight",

"Auditorium→Robotics Dept":
  "Walk 10m straight and turn left and walk 50m straight",

"Auditorium→AI&DS Dept":
  "Walk 10m straight and turn left and walk 60m straight and turn left and walk 60m straight",

"Auditorium→KTech Lab":
  "Walk 40m straight and turn right and walk 10m straight",


"KTech Lab→Stairs 1F":
  "Walk 10m straight turn right and walk 50m straight",

"KTech Lab→Auditorium":
  "Walk 10m straight and turn right and walk 40m straight",

"KTech Lab→Mech Dept":
  "Walk 10m straight and turn right and walk 50m straight",

"KTech Lab→EC Dept":
  "Walk 10m straight and turn right and walk 50m straight and turn left and walk 40m straight",

"KTech Lab→Robotics Dept":
  "Walk 10m straight and turn right and walk 50m straight and then turn left and walk 50m straight",

"KTech Lab→AI&DS Dept":
  "Walk 10m straight and turn right and walk 50m straight and then turn left and walk 60m straight and turn left and walk 60m straight",

  /* ========= FLOOR 2 (FIRST FLOOR) — REVERSE ========= */

"Stairs 1F→Stairs GF":
  "Walk 20m down",


"Mech Dept→Stairs 1F":
  "Walk 10m straight and turn right",

"EC Dept→Stairs 1F":
  "Walk 40m straight and turn right",

"Robotics Dept→Stairs 1F":
  "Walk 40m straight back",

"AI&DS Dept→Stairs 1F":
  "Walk 60m straight back then turn left and walk 60m straight back",

"Auditorium→Stairs 1F":
  "Walk 20m right",

"KTech Lab→Stairs 1F":
  "Walk 20m straight then turn left and walk 50m straight",


"Stairs 1F→Mech Dept":
  "Walk 10m straight back",

"Stairs 1F→EC Dept":
  "Walk 30m straight back",

"Stairs 1F→Robotics Dept":
  "Walk 40m straight back",

"Stairs 1F→AI&DS Dept":
  "Walk 60m straight back then turn right and walk 60m straight back",

"Stairs 1F→Auditorium":
  "Walk 20m right",

"Stairs 1F→KTech Lab":
  "Walk 20m straight then turn left walk 50m",


"Mech Dept→EC Dept":
  "Walk 30m straight and turn left",

"Robotics Dept→Mech Dept":
  "Walk 40m straight back",

"EC Dept→Robotics Dept":
  "Walk 10m straight back",

"AI&DS Dept→Mech Dept":
  "Walk 60m straight back then turn left walk 50m straight back",

"Auditorium→Mech Dept":
  "Turn left walk 10m then turn left walk 10m",

"KTech Lab→Mech Dept":
  "Walk 20m straight back then turn left and walk 40m straight back",


"EC Dept→AI&DS Dept":
  "Walk 40m straight back then turn left and walk 60m straight back",

"Robotics Dept→AI&DS Dept":
  "Walk 30m straight back then turn left and walk 60m straight back",

"Auditorium→AI&DS Dept":
  "Walk 60m straight back then turn right walk 60m straight back then turn right walk 10m back",

"KTech Lab→AI&DS Dept":
  "Walk 10m straight back then turn left walk 40m straight back then turn left walk 60m straight back then turn left walk 50m straight back",


"EC Dept→Auditorium":
  "Walk 20m straight back then turn left and walk 40m straight back",

"Robotics Dept→Auditorium":
  "Walk 10m straight back then turn left then walk 40m straight back",

"AI&DS Dept→Auditorium":
  "Walk 60m straight back then turn right walk 60m straight back then turn right walk 10m back",

"KTech Lab→Auditorium":
  "Walk 40m straight back then turn left walk 10m straight back",


"EC Dept→KTech Lab":
  "Walk 10m straight back then turn left walk 40m straight back then turn left walk 40m straight back",

"Robotics Dept→KTech Lab":
  "Walk 10m straight back then turn left walk 40m straight back then turn left walk 40m straight back",

"AI&DS Dept→KTech Lab":
  "Walk 10m straight back then turn left walk 40m straight back then turn left walk 60m straight back then turn left walk 50m straight back",

"Auditorium→KTech Lab":
  "Walk 10m straight back then turn left walk 40m straight back",

  /* ========== SECOND FLOOR (VALID FORWARD PATHS) ========== */

"Stairs 2F→CSE Dept":
  "Walk 10m straight",

"Stairs 2F→CCP Lab":
  "Walk 20m straight",

"Stairs 2F→CCF Lab":
  "Walk 60m straight and turn left and walk 10m",

"Stairs 2F→MCA Dept":
  "Walk 60m straight and turn left and walk 60m straight",


"CSE Dept→Stairs 2F":
  "Walk 10m straight",

"CSE Dept→CCP Lab":
  "Walk 20m right",

"CSE Dept→CCF Lab":
  "Walk 60m straight and turn right and walk 10m",

"CSE Dept→MCA Dept":
  "Walk 60m straight and turn left and walk 60m straight",


"CCP Lab→Stairs 2F":
  "Walk 20m straight",

"CCP Lab→CSE Dept":
  "Walk 20m left",

"CCP Lab→CCF Lab":
  "Walk 40m straight and turn right then walk 10m straight",

"CCP Lab→MCA Dept":
  "Move 40m straight and turn left and walk 60m straight",


"CCF Lab→Stairs 2F":
  "Walk 10m straight and turn left and walk 60m straight",

"CCF Lab→CSE Dept":
  "Walk 10m straight and turn left and walk 60m straight",

"CCF Lab→CCP Lab":
  "Walk 10m straight and turn left and walk 60m straight",

"CCF Lab→MCA Dept":
  "Walk 60m straight",


"MCA Dept→Stairs 2F":
  "Walk 60m straight and turn right and walk 60m straight",

"MCA Dept→CSE Dept":
  "Walk 60m straight and turn right and walk 50m straight",

"MCA Dept→CCP Lab":
  "Walk 60m straight and turn right and walk 40m straight",

"MCA Dept→CCF Lab":
  "Walk 70m straight",

  /* ========== SECOND FLOOR (VALID REVERSE PATHS) ========== */

"Stairs 2F→Stairs 1F":
  "Walk 20m down",

"CSE Dept→Stairs 2F":
  "Walk 10m straight",

"CCP Lab→Stairs 2F":
  "Walk 20m straight back",

"CCF Lab→Stairs 2F":
  "Walk 10m straight back then turn right and walk 60m straight",

"MCA Dept→Stairs 2F":
  "Walk 60m straight back then turn right and walk 60m straight back",


"Stairs 2F→CSE Dept":
  "Walk 10m straight back",

"CCP Lab→CSE Dept":
  "Walk 20m left back",

"CCF Lab→CSE Dept":
  "Walk 10m straight back then turn right and walk 60m straight back",

"MCA Dept→CSE Dept":
  "Walk 60m straight back then turn right and walk 60m straight back",


"CSE Dept→CCP Lab":
  "Turn left and walk 20m",

"CCF Lab→CCP Lab":
  "Walk 60m straight back then turn right and walk 10m straight back",

"MCA Dept→CCP Lab":
  "Walk 60m straight back then turn right and walk 40m straight back",


"CSE Dept→CCF Lab":
  "Walk 60m straight back then turn left and walk 10m straight back",

"CCP Lab→CCF Lab":
  "Walk 10m straight back then turn left and walk 40m straight back",

"MCA Dept→CCF Lab":
  "Walk 70m straight back",


"Stairs 2F→MCA Dept":
  "Walk 60m straight back then turn right and walk 60m straight",

"CSE Dept→MCA Dept":
  "Walk 60m straight back then turn right and walk 50m straight back",

"CCP Lab→MCA Dept":
  "Walk 40m straight back then turn right and walk 60m straight back",

"CCF Lab→MCA Dept":
  "Walk 60m straight back",

  /* ========== THIRD FLOOR (VALID FORWARD PATHS) ========== */

"Stairs 3F→Lecture Hall":
  "Go straight then turn left",

"Stairs 3F→MBA Dept":
  "Go 5m straight then turn left",

"Stairs 3F→EEE Dept":
  "Walk 60m straight then turn left go 60m straight",

"Stairs 3F→1st Year Classes":
  "Walk 60m straight then turn left go 60m straight",


"Lecture Hall→Stairs 3F":
  "Turn right then go straight",

"Lecture Hall→MBA Dept":
  "Turn right move 2m then turn left",

"Lecture Hall→EEE Dept":
  "Turn right then go 50m straight and turn left walk 60m straight",

"Lecture Hall→1st Year Classes":
  "Turn right then go 50m straight and turn left walk 60m straight",


"MBA Dept→Stairs 3F":
  "Turn left go 5m straight",

"MBA Dept→Lecture Hall":
  "Turn left move 2m",

"MBA Dept→EEE Dept":
  "Walk 40m straight then turn left walk 60m straight",

"MBA Dept→1st Year Classes":
  "Walk 40m straight then turn left walk 60m straight",


"EEE Dept→Stairs 3F":
  "Walk 60m straight back then turn left walk 60m straight back",

"EEE Dept→Lecture Hall":
  "Turn right then go 50m straight then turn left walk 60m straight",

"EEE Dept→MBA Dept":
  "Turn left go 60m straight then turn right go 40m straight and turn left",

"EEE Dept→1st Year Classes":
  "Turn left go 60m straight then turn right go 40m straight and turn left",


"1st Year Classes→Stairs 3F":
  "Walk 60m straight back then turn left walk 60m straight back",

"1st Year Classes→Lecture Hall":
  "Walk 60m straight back then turn left walk 42m back then turn right",

"1st Year Classes→MBA Dept":
  "Walk 40m straight back then turn right walk 40m back then turn right",

"1st Year Classes→EEE Dept":
  "Walk 10m straight back then turn right then turn left",

};