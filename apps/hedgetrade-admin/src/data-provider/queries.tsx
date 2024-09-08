import { gql } from "@apollo/client";

export const GET_BLUEPRINTS = gql`
  query GetBlueprints {
    blueprints {
      id
      name
      description
      aiData
      buyPair
      createdAt
      exchange
      expiry
      maxOrder
      minOrder
      sellPair
      stake
      stakeAmount
      stopLoss
      successRate
      takeProfit
      tradeType
      updatedAt
      user {
        id
        firstName
        email
        walletAddress
      }
      transactions {
        id
        amount
      }
 
    }
  }
`;


export const CREATE_BLUEPRINT_MUTATION = gql`
  mutation CreateBlueprint($input: BlueprintCreateInput!) {
    createBlueprint(data: $input) {
      id
      name
      description
      successRate
      stopLoss
      takeProfit
      stakeAmount
      stake
      maxOrder
      minOrder
      tradeType
      exchange
      buyPair
      sellPair
    }
  }
`;