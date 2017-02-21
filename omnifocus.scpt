on run argv

	tell application "System Events"
		if not exists process "OmniFocus" then
			tell application "OmniFocus" to activate
		end if
	end tell

	tell application "OmniFocus"
		tell front document
			make new inbox task with properties {name:item 1 of argv}
		end tell
	end tell
end run