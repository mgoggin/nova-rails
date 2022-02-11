function reload() {
  nova.commands.invoke("tommasonegri.rails.commands.reload")
}

nova.config.onDidChange("tommasonegri.rails.config.solargraph.diagnostics", reload)
nova.workspace.config.onDidChange("tommasonegri.rails.config.solargraph.diagnostics", reload)

function getExtensionSetting() {
  return nova.config.get("tommasonegri.rails.config.solargraph.diagnostics", "boolean")
}

function getWorkspaceSetting() {
  const str = nova.workspace.config.get("tommasonegri.rails.config.solargraph.diagnostics", "string")

  switch (str) {
    case "Global Default":
      return null
    case "Enable":
      return true
    case "Disable":
      return false
    default:
      return null
  }
}

export default function solargraphDiagnosticsSetting() {
  const workspaceConfig = getWorkspaceSetting()
  const extensionConfig = getExtensionSetting()

  return workspaceConfig === null ? extensionConfig : workspaceConfig
}
