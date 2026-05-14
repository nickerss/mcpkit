---
title: "OCI Container Engine MCP"
name: oci-container-engine-mcp
category: mcp-servers
tags: [oci, oracle, kubernetes, oke, containers]
price: pay-as-you-go
website: https://www.oracle.com/cloud/cloud-native/container-engine
logo: 
description: "OCI Oracle Container Engine 平台 MCP，Oracle Kubernetes 服务，AI Agent OCI Kubernetes。"
descriptionEn: "OCI Oracle Container Engine platform MCP for Oracle Kubernetes service for AI Agent OCI Kubernetes."
evaluation:
  easeOfUse: 3
  security: 5
  activity: 4
  scenarioFit: 4
  overall: 4
certificationStatus: "pending"
installCommand: "npx @oci/container-engine-mcp"
envVars: ["OCI_TENANCY_OCID"]
configExample: |
  {
    "mcpServers": { "oci-k8s": { "command": "npx", "args": ["-y", "@oci/container-engine-mcp"], "env": { "OCI_TENANCY_OCID": "ocid1.xxx" } } }
  }
featured: false
submittedAt: "2026-05-14T00:00:00.000Z"
---

# OCI Container Engine MCP

OCI Oracle Container Engine 平台 MCP，Oracle Kubernetes 服务，AI Agent OCI Kubernetes。
