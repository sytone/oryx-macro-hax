
export function prepare(newMacro) {

    const macroExtensions = {
        "dance_SINGLETAP_A": newMacro()
            .typeAlphanumeric("git status\n"),
        "dance_SINGLEHOLD_A": newMacro()
            .typeAlphanumeric("git log\n"),
        "dance_DOUBLETAP_A": newMacro()
            .typeAlphanumeric("ls -al\n"),
        "dance_DOUBLEHOLD_A": newMacro()
            .typeAlphanumeric("cp ../moonlander_hacked.bin /mnt/c/tools/\n"),
        //        case SINGLE_TAP: SEND_STRING("{}"); register_code(KC_LEFT); unregister_code(KC_LEFT); break;
    };

    return { macroExtensions };
}



