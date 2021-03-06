import { NetworkGraphNode } from "./NetworkTypes";

export interface GraphNode extends NetworkGraphNode {
  id: string;
  distance: number;
}

export interface GraphLink {
  source: string;
  target: string;
}

export interface GraphData {
  links: GraphLink[];
  nodes: GraphNode[];
}
