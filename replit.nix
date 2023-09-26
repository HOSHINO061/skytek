{ pkgs }: {
<<<<<<< HEAD
  deps = [
    pkgs.nodejs-16_x
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server  
  ];
=======
	deps = [
		pkgs.nodejs-18_x
    pkgs.nodePackages.typescript-language-server
    pkgs.yarn
    pkgs.replitPackages.jest
	];
>>>>>>> e3b9cc4a916129f41b56794090101651aa05a5e6
}