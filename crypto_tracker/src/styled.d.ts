import "styled-components";

/* declare module "styled-components" {
    
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
  }
} */

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    boardColor: string;
    cardColor: string
  }
}
