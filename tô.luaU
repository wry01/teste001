local OrionLib = loadstring(game:HttpGet("https://raw.githubusercontent.com/shlexware/Orion/main/source"))()

local Window = OrionLib:MakeWindow({
    Name = "Teleport Script",
    HidePremium = false,
    SaveConfig = false
})

local MainTab = Window:MakeTab({
    Name = "Principal",
    Icon = "rbxassetid://4483345998",
    PremiumOnly = false
})

MainTab:AddButton({
    Name = "Teleport Flag",
    Callback = function()
        local player = game.Players.LocalPlayer
        if player and player.Character and player.Character:FindFirstChild("HumanoidRootPart") then
            player.Character.HumanoidRootPart.CFrame = CFrame.new(-653, 122, -1255)
            print("Você foi teleportado para a Flag!")
        else
            print("Erro ao teleportar.")
        end
    end
})

MainTab:AddButton({
    Name = "Teleport Barrel 1",
    Callback = function()
        local player = game.Players.LocalPlayer
        if player and player.Character and player.Character:FindFirstChild("HumanoidRootPart") then
            player.Character.HumanoidRootPart.CFrame = CFrame.new(669, 121, 779)
            print("Você foi teleportado para o Barrel 1!")
        else
            print("Erro ao teleportar.")
        end
    end
})

MainTab:AddButton({
    Name = "Teleport Barrel 2",
    Callback = function()
        local player = game.Players.LocalPlayer
        if player and player.Character and player.Character:FindFirstChild("HumanoidRootPart") then
            player.Character.HumanoidRootPart.CFrame = CFrame.new(-1491, 121, -3679)
            print("Você foi teleportado para o Barrel 2!")
        else
            print("Erro ao teleportar.")
        end
    end
})

MainTab:AddButton({
    Name = "Teleport Barrel 3",
    Callback = function()
        local player = game.Players.LocalPlayer
        if player and player.Character and player.Character:FindFirstChild("HumanoidRootPart") then
            player.Character.HumanoidRootPart.CFrame = CFrame.new(-3016, 121, -1854)
            print("Você foi teleportado para o Barrel 3!")
        else
            print("Erro ao teleportar.")
        end
    end
})

local CreditsTab = Window:MakeTab({
    Name = "Credits",
    Icon = "rbxassetid://4483345998",
    PremiumOnly = false
})

CreditsTab:AddParagraph("Credits", "By: Mkz\nVehicle part teleport coming soon.")

OrionLib:Init()
