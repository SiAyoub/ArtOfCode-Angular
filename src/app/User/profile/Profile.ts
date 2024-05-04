export interface Profile {
    musicPrefInput: musicpref;
    dancePrefInput: dancepref;
    willInput: will;
  }
  
  export enum dancepref {
    BALLET = "BALLET",
    HIP_HOP = "HIP_HOP",
    SALSA = "SALSA",
    TANGO = "TANGO",
    BREAKDANCE = "BREAKDANCE",
    CONTEMPORARY = "CONTEMPORARY",
  }
  
  export enum musicpref {
    CLASSICAL = "CLASSICAL",
    ROCK = "ROCK",
    POP = "POP",
    JAZZ = "JAZZ",
    HIP_HOP = "HIP_HOP",
    ELECTRONIC = "ELECTRONIC",
  }
  
  export enum will {
    EVENTS = "EVENTS",
    HIRE = "HIRE",
    WORK = "WORK",
  }
  