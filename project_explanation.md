# Sensai Application Workflow & Component Documentation

This document provides a detailed overview of every file, page, component, and backend route in the Sensai application. It breaks down what each file does, the functions within, major sections, and user-interactive elements like buttons.

## 🔗 Frontend Pages

### `app/api/sentry-example-api/route.ts`

**Purpose:** A functional block handling route logic and presentation.

**Functions / Logic:**
- **`GET`**: Main functional React component responsible for rendering and composing the GET views and logic.

### `app/global-error.tsx`

**Purpose:** A functional block handling global-error logic and presentation.

**Functions / Logic:**
- **`GlobalError`**: Main functional React component responsible for rendering and composing the GlobalError views and logic.

### `app/school/[id]/ClientSchoolMemberView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`ClientSchoolMemberView`**: Main functional React component responsible for rendering and composing the ClientSchoolMemberView views and logic.
- **`fetchCohortCourses`**: Retrieves/fetches data from the state or API regarding CohortCourses.
- **`fetchCompletionData`**: Retrieves/fetches data from the state or API regarding CompletionData.
- **`fetchSchool`**: Retrieves/fetches data from the state or API regarding School.
- **`handleBackClick`**: Event handler triggered to execute the BackClick related UI/state action.
- **`handleCohortOptionSelect`**: Event handler triggered to execute the CohortOptionSelect related UI/state action.
- **`handleCohortSelect`**: Event handler triggered to execute the CohortSelect related UI/state action.
- **`handleCourseSelect`**: Event handler triggered to execute the CourseSelect related UI/state action.
- **`updateUrlWithCohortId`**: Updates or mutates the internal state for updateUrlWithCohortId.

**Major Sections:**
- **Div: container mx-auto**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`{ if (activeCohort) { fetchCohortCourses(activeCohort.id); } }} className="px-4 py-2 rounded-md transition-colors bg-gray-200 dark:bg-gray-800 hove...`**: Triggers component state transitions or API events associated with the action handler.
- **`setShowBatchSelector(true)} > {availableBatches.find(b => b.id === selectedBatchId)?.name || "Select Batch"} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setShowCohortSelector(true)} > Switch (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `app/school/[id]/cohort/[cohortId]/leaderboard/ClientLeaderboardView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`ClientLeaderboardView`**: Main functional React component responsible for rendering and composing the ClientLeaderboardView views and logic.
- **`fetchLeaderboardData`**: Retrieves/fetches data from the state or API regarding LeaderboardData.
- **`getPositionBadge`**: Retrieves/fetches data from the state or API regarding sitionBadge.
- **`isCurrentUser`**: Utility function to process 'isCurrentUser' logic within the component context.
- **`shouldShowMedal`**: Utility function to process 'shouldShowMedal' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`router.back()} className="flex items-center space-x-2 px-3 py-2 bg-gray-800/40 hover:bg-gray-700/60 rounded-full text-sm text-gray-300 transition-c...`**: Triggers component state transitions or API events associated with the action handler.
- **`location.reload()} className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors" > Try Again (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `app/school/[id]/courses/[courseId]/learner-view/[learnerId]/ClientLearnerViewWrapper.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`ClientLearnerViewWrapper`**: Main functional React component responsible for rendering and composing the ClientLearnerViewWrapper views and logic.
- **`fetchLearnerProgress`**: Retrieves/fetches data from the state or API regarding LearnerProgress.

### `app/school/admin/[id]/ClientSchoolAdminView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`ClientSchoolAdminView`**: Main functional React component responsible for rendering and composing the ClientSchoolAdminView views and logic.
- **`areAllMembersSelected`**: Utility function to process 'areAllMembersSelected' logic within the component context.
- **`confirmDeleteMember`**: Utility function to process 'confirmDeleteMember' logic within the component context.
- **`fetchSchool`**: Retrieves/fetches data from the state or API regarding School.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleCohortDelete`**: Event handler triggered to execute the CohortDelete related UI/state action.
- **`handleCourseCreationSuccess`**: Event handler triggered to execute the CourseCreationSuccess related UI/state action.
- **`handleCourseDelete`**: Event handler triggered to execute the CourseDelete related UI/state action.
- **`handleCreateCohort`**: Event handler triggered to execute the CreateCohort related UI/state action.
- **`handleDeleteMember`**: Event handler triggered to execute the DeleteMember related UI/state action.
- **`handleDeleteSelectedMembers`**: Event handler triggered to execute the DeleteSelectedMembers related UI/state action.
- **`handleInviteMembers`**: Event handler triggered to execute the InviteMembers related UI/state action.
- **`handleMemberSelection`**: Event handler triggered to execute the MemberSelection related UI/state action.
- **`handleNameBlur`**: Event handler triggered to execute the NameBlur related UI/state action.
- **`handleNameKeyDown`**: Event handler triggered to execute the NameKeyDown related UI/state action.
- **`handleSelectAllMembers`**: Event handler triggered to execute the SelectAllMembers related UI/state action.
- **`handleTabChange`**: Event handler triggered to execute the TabChange related UI/state action.
- **`hasSelectableMembers`**: Utility function to process 'hasSelectableMembers' logic within the component context.
- **`isCurrentUser`**: Utility function to process 'isCurrentUser' logic within the component context.
- **`toggleNameEdit`**: Utility function to process 'toggleNameEdit' logic within the component context.

**Major Sections:**
- **Div: container mx-auto px-4 py-8**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`handleDeleteMember(member)} className="flex items-center gap-1 transition-colors focus:outline-none cursor-pointer text-gray-600 dark:text-gray-400...`**: Triggers component state transitions or API events associated with the action handler.
- **`setIsCreateCourseDialogOpen(true)} className="px-6 py-3 text-sm font-medium rounded-full hover:opacity-90 transition-opacity inline-block cursor-po...`**: Triggers component state transitions or API events associated with the action handler.
- **`setIsInviteDialogOpen(true)} > Invite members (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleTabChange('cohorts')} > Cohorts (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Remove ({selectedMembers.length}) (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleTabChange('courses')} > Courses (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ setIsCreateCohortDialogOpen(true); }} > Create cohort (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{isEditingName ? : } (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleTabChange('members')} > Team (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `app/school/admin/[id]/cohorts/[cohortId]/ClientCohortPage.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`ClientCohortPage`**: Main functional React component responsible for rendering and composing the ClientCohortPage views and logic.
- **`cancelCohortNameEditing`**: Utility function to process 'cancelCohortNameEditing' logic within the component context.
- **`closeCoursePublishBanner`**: Utility function to process 'closeCoursePublishBanner' logic within the component context.
- **`enableCohortNameEditing`**: Utility function to process 'enableCohortNameEditing' logic within the component context.
- **`fetchAvailableCourses`**: Retrieves/fetches data from the state or API regarding AvailableCourses.
- **`fetchBatches`**: Retrieves/fetches data from the state or API regarding Batches.
- **`fetchCohort`**: Retrieves/fetches data from the state or API regarding Cohort.
- **`handleCloseBatchDialog`**: Event handler triggered to execute the CloseBatchDialog related UI/state action.
- **`handleCloseLearnerInviteDialog`**: Event handler triggered to execute the CloseLearnerInviteDialog related UI/state action.
- **`handleCloseSettingsDialog`**: Event handler triggered to execute the CloseSettingsDialog related UI/state action.
- **`handleCohortNameInput`**: Event handler triggered to execute the CohortNameInput related UI/state action.
- **`handleCohortNameKeyDown`**: Event handler triggered to execute the CohortNameKeyDown related UI/state action.
- **`handleConfirmDelete`**: Event handler triggered to execute the ConfirmDelete related UI/state action.
- **`handleCoursesLinked`**: Event handler triggered to execute the CoursesLinked related UI/state action.
- **`handleCreateBatch`**: Event handler triggered to execute the CreateBatch related UI/state action.
- **`handleInviteLearners`**: Event handler triggered to execute the InviteLearners related UI/state action.
- **`handleOpenBatchDialog`**: Event handler triggered to execute the OpenBatchDialog related UI/state action.
- **`handleOpenLearnerInviteDialog`**: Event handler triggered to execute the OpenLearnerInviteDialog related UI/state action.
- **`handleOpenSettingsDialog`**: Event handler triggered to execute the OpenSettingsDialog related UI/state action.
- **`handleRequestDelete`**: Event handler triggered to execute the RequestDelete related UI/state action.
- **`initiateCourseUnlink`**: Utility function to process 'initiateCourseUnlink' logic within the component context.
- **`removeCourseFromCohort`**: Utility function to process 'removeCourseFromCohort' logic within the component context.
- **`saveCohortName`**: Utility function to process 'saveCohortName' logic within the component context.

**Major Sections:**
- **Div: container mx-auto px-4 py-8**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`setTab('dashboard')} > Dashboard (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Invite learners (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Edit (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Save (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`initiateCourseUnlink(course)} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer flex items-center m...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ setIsDropdownOpen(!isDropdownOpen); if (!isDropdownOpen) { fetchAvailableCourses(); } }} > Link course (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setTab('learners')} > Learners (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setTab('batches')} > Batches (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setSelectedBatch(batch)} className={`w-full text-left p-4 rounded-lg transition-colors cursor-pointer ${selectedBatch?.id === batch.id ? 'bg-foregr...`**: Triggers component state transitions or API events associated with the action handler.
- **`handleOpenSettingsDialog(course)} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer flex items-cent...`**: Triggers component state transitions or API events associated with the action handler.
- **`setTab('mentors')} > Mentors (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Create batch (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `app/school/admin/[id]/courses/[courseId]/preview/ClientPreviewWrapper.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`ClientPreviewWrapper`**: Main functional React component responsible for rendering and composing the ClientPreviewWrapper views and logic.

### `app/school/admin/layout.tsx`

**Purpose:** Provides the structural wrapper and context providers for nested routes.

**Functions / Logic:**
- **`AdminLayout`**: Main functional React component responsible for rendering and composing the AdminLayout views and logic.

### `app/sentry-example-page/page.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`Page`**: Main functional React component responsible for rendering and composing the Page views and logic.
- **`checkConnectivity`**: Utility function to process 'checkConnectivity' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`{ await Sentry.startSpan({ name: 'Example Frontend/Backend Span', op: 'test' }, async () => { const res = await fetch("/api/sentry-example-api"); i...`**: Triggers component state transitions or API events associated with the action handler.

## 🧩 Frontend Components

### `components/AssignmentEditor.tsx`

**Purpose:** A functional block handling AssignmentEditor logic and presentation.

**Functions / Logic:**
- **`fetchAssignmentData`**: Retrieves/fetches data from the state or API regarding AssignmentData.
- **`getDialogTitle`**: Retrieves/fetches data from the state or API regarding alogTitle.
- **`handleIntegrationPageRemove`**: Event handler triggered to execute the IntegrationPageRemove related UI/state action.
- **`handleIntegrationPageSelect`**: Event handler triggered to execute the IntegrationPageSelect related UI/state action.
- **`updateDraftAssignment`**: Updates or mutates the internal state for updateDraftAssignment.

**Interactive Elements (Buttons / Actions):**
- **`setActiveTab('knowledge')} > AI training resources (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setActiveTab('evaluation')} > Evaluation criteria (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setActiveTab('problem')} > Problem statement (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/AudioInputComponent.tsx`

**Purpose:** A functional block handling AudioInputComponent logic and presentation.

**Functions / Logic:**
- **`AudioInputComponent`**: Main functional React component responsible for rendering and composing the AudioInputComponent views and logic.
- **`LiveWaveform`**: Main functional React component responsible for rendering and composing the LiveWaveform views and logic.
- **`SnapshotWaveform`**: Main functional React component responsible for rendering and composing the SnapshotWaveform views and logic.
- **`cancelDelete`**: Utility function to process 'cancelDelete' logic within the component context.
- **`confirmDelete`**: Utility function to process 'confirmDelete' logic within the component context.
- **`draw`**: Utility function to process 'draw' logic within the component context.
- **`formatTime`**: Utility function to process 'formatTime' logic within the component context.
- **`generateWaveformFromAudio`**: Utility function to process 'generateWaveformFromAudio' logic within the component context.
- **`getSupportedMimeType`**: Retrieves/fetches data from the state or API regarding pportedMimeType.
- **`handleDeleteClick`**: Event handler triggered to execute the DeleteClick related UI/state action.
- **`handleSeek`**: Event handler triggered to execute the Seek related UI/state action.
- **`handleSubmit`**: Event handler triggered to execute the Submit related UI/state action.
- **`renderWaveformBar`**: Helper function to render the specific WaveformBar UI section.
- **`startRecording`**: Utility function to process 'startRecording' logic within the component context.
- **`stopRecording`**: Utility function to process 'stopRecording' logic within the component context.
- **`togglePlayback`**: Utility function to process 'togglePlayback' logic within the component context.
- **`updateLiveWaveform`**: Updates or mutates the internal state for updateLiveWaveform.

**Interactive Elements (Buttons / Actions):**
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{isSubmitting ? ( ) : ( <> )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Delete (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{isRecording ? ( ) : audioBlob ? ( isPlaying ? : <> ) : ( )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/BlockNoteEditor.tsx`

**Purpose:** A functional block handling BlockNoteEditor logic and presentation.

**Functions / Logic:**
- **`BlockNoteEditor`**: Main functional React component responsible for rendering and composing the BlockNoteEditor views and logic.
- **`handleChange`**: Event handler triggered to execute the Change related UI/state action.
- **`handleCloseToast`**: Event handler triggered to execute the CloseToast related UI/state action.
- **`handleEditorClick`**: Event handler triggered to execute the EditorClick related UI/state action.
- **`handleVideoBlockChange`**: Event handler triggered to execute the VideoBlockChange related UI/state action.
- **`isYouTubeLink`**: Utility function to process 'isYouTubeLink' logic within the component context.
- **`resolveFileUrl`**: Utility function to process 'resolveFileUrl' logic within the component context.
- **`uploadFile`**: Utility function to process 'uploadFile' logic within the component context.

### `components/ChatHistoryView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`CodeMessageDisplay`**: Main functional React component responsible for rendering and composing the CodeMessageDisplay views and logic.
- **`bubbleVariant`**: Utility function to process 'bubbleVariant' logic within the component context.
- **`formatMessageDayLabel`**: Utility function to process 'formatMessageDayLabel' logic within the component context.
- **`formatMessageTime`**: Utility function to process 'formatMessageTime' logic within the component context.
- **`getLocalDateKey`**: Retrieves/fetches data from the state or API regarding calDateKey.
- **`isErrorMessage`**: Utility function to process 'isErrorMessage' logic within the component context.
- **`shouldShowViewReport`**: Utility function to process 'shouldShowViewReport' logic within the component context.
- **`toSafeDate`**: Utility function to process 'toSafeDate' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`onShowLearnerViewChange(!showLearnerView)} className={`relative cursor-pointer inline-flex h-6 w-11 items-center rounded-full border transition-col...`**: Triggers component state transitions or API events associated with the action handler.
- **`Retry (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onViewScorecard(message.scorecard || [])} className="bg-indigo-600 hover:bg-indigo-700 text-white dark:bg-[#333333] dark:hover:bg-[#444444] px-4 py...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ const fileUuid = message.fileUuid!; const fileName = message.fileName!; onFileDownload(fileUuid, fileName); }} className="shrink-0 mt-1 w-8 h-8 r...`**: Triggers component state transitions or API events associated with the action handler.

### `components/ChatPlaceholderView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

### `components/ChatView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`adjustTextareaHeight`**: Utility function to process 'adjustTextareaHeight' logic within the component context.
- **`extractCodeFromChatHistory`**: Utility function to process 'extractCodeFromChatHistory' logic within the component context.
- **`fetchSavedCode`**: Retrieves/fetches data from the state or API regarding SavedCode.
- **`handleAutoSave`**: Event handler triggered to execute the AutoSave related UI/state action.
- **`handleCodeRun`**: Event handler triggered to execute the CodeRun related UI/state action.
- **`handleCodeSubmit`**: Event handler triggered to execute the CodeSubmit related UI/state action.
- **`handleSave`**: Event handler triggered to execute the Save related UI/state action.
- **`handleSubmitAnswer`**: Event handler triggered to execute the SubmitAnswer related UI/state action.
- **`handleSuggestionClick`**: Event handler triggered to execute the SuggestionClick related UI/state action.
- **`handleTextareaKeyDown`**: Event handler triggered to execute the TextareaKeyDown related UI/state action.
- **`renderMainContent`**: Helper function to render the specific MainContent UI section.
- **`saveCode`**: Utility function to process 'saveCode' logic within the component context.

**Major Sections:**
- **Div: pt-2 input-container bg-white border-t border-gray-200 dark:bg-[#111111] da...**: Structural container defining a discrete area of the layout.
- **Div: flex-1 overflow-y-auto messages-container bg-white/80 dark:bg-transparent**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`{isSaving ? ( ) : ( )} {isSaving ? 'Saving...' : 'Save'} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleSuggestionClick("Why is this important to understand")} > Why is this important to understand (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleSuggestionClick("Summarise it with clear takeaways")} > Summarise it with clear takeaways (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleSuggestionClick("Explain using an example")} > Explain using an example (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleSubmitAnswer('text')} disabled={!currentAnswer.trim() || isSubmitting || isAiResponding} aria-label="Submit answer" type="button" > {isSubmit...`**: Triggers component state transitions or API events associated with the action handler.

### `components/CodeEditorView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`App`**: Main functional React component responsible for rendering and composing the App views and logic.
- **`MyComponent`**: Main functional React component responsible for rendering and composing the MyComponent views and logic.
- **`changeText`**: Updates or mutates the internal state for changeText.
- **`checkMobileView`**: Utility function to process 'checkMobileView' logic within the component context.
- **`countProvidedInputs`**: Utility function to process 'countProvidedInputs' logic within the component context.
- **`countPythonInputs`**: Utility function to process 'countPythonInputs' logic within the component context.
- **`executeWithJudge0`**: Utility function to process 'executeWithJudge0' logic within the component context.
- **`formatConsoleOutput`**: Utility function to process 'formatConsoleOutput' logic within the component context.
- **`generateTableFromSqlOutput`**: Utility function to process 'generateTableFromSqlOutput' logic within the component context.
- **`getMonacoLanguage`**: Retrieves/fetches data from the state or API regarding nacoLanguage.
- **`handleCodeChange`**: Event handler triggered to execute the CodeChange related UI/state action.
- **`handleCodeRun`**: Event handler triggered to execute the CodeRun related UI/state action.
- **`handleEditorDidMount`**: Event handler triggered to execute the EditorDidMount related UI/state action.
- **`handleMobileBackClick`**: Event handler triggered to execute the MobileBackClick related UI/state action.
- **`handleSubmit`**: Event handler triggered to execute the Submit related UI/state action.
- **`setupCodeState`**: Updates or mutates the internal state for setupCodeState.
- **`setupPastePreventionHandler`**: Updates or mutates the internal state for setupPastePreventionHandler.

**Interactive Elements (Buttons / Actions):**
- **`{ setActiveLanguage(lang); }} className={`px-3 py-1 text-xs font-medium transition-colors cursor-pointer ${activeLanguage === lang ? 'bg-white dark...`**: Triggers component state transitions or API events associated with the action handler.
- **`Clear (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{isRunning ? ( <> Run ) : ( <> Run )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ setShowInputPanel(!showInputPanel); // Focus the input textarea when showing setTimeout(() => { if (!showInputPanel && inputRef.current) { inputR...`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Submit (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ setActiveLanguage(lang); }} className={`px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${activeLanguage === lang ? 'bg-white dark...`**: Triggers component state transitions or API events associated with the action handler.
- **`Change Text (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setCount(count + 1)} style={{ padding: "8px 16px", borderRadius: "4px", backgroundColor: "#0070f3", color: "white", border: "none", cursor: "pointe...`**: Triggers component state transitions or API events associated with the action handler.

### `components/CohortCard.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`CohortCard`**: Main functional React component responsible for rendering and composing the CohortCard views and logic.
- **`getBorderColor`**: Retrieves/fetches data from the state or API regarding rderColor.
- **`handleDeleteClick`**: Event handler triggered to execute the DeleteClick related UI/state action.
- **`handleDeleteConfirm`**: Event handler triggered to execute the DeleteConfirm related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/CohortCoursesLinkerDropdown.tsx`

**Purpose:** A functional block handling CohortCoursesLinkerDropdown logic and presentation.

**Functions / Logic:**
- **`CohortCoursesLinkerDropdown`**: Main functional React component responsible for rendering and composing the CohortCoursesLinkerDropdown views and logic.
- **`handleAddSelectedCourses`**: Event handler triggered to execute the AddSelectedCourses related UI/state action.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleCourseSearch`**: Event handler triggered to execute the CourseSearch related UI/state action.
- **`removeTempCourse`**: Utility function to process 'removeTempCourse' logic within the component context.
- **`selectCourse`**: Utility function to process 'selectCourse' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`removeTempCourse(course.id, e)} className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white cursor-pointer" > (Action: No...`**: Triggers component state transitions or API events associated with the action handler.
- **`Try again (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{isLoadingCourses ? "Linking..." : "Link courses with cohort"} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/CohortDashboard.tsx`

**Purpose:** A functional block handling CohortDashboard logic and presentation.

**Functions / Logic:**
- **`CohortDashboard`**: Main functional React component responsible for rendering and composing the CohortDashboard views and logic.
- **`fetchCourseMetrics`**: Retrieves/fetches data from the state or API regarding CourseMetrics.
- **`formatLearnerName`**: Utility function to process 'formatLearnerName' logic within the component context.
- **`getColorClass`**: Retrieves/fetches data from the state or API regarding lorClass.
- **`getCompletionPercentage`**: Retrieves/fetches data from the state or API regarding mpletionPercentage.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleSort`**: Event handler triggered to execute the Sort related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`{ if (onAddLearners) onAddLearners(); }} className="px-6 py-3 bg-[#e5e7eb] text-[#000000] dark:bg-[#ffffff] dark:text-[#000000] text-sm font-medium...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ setActiveCourseId(course.id); setLocalCourseIndex(index); if (onActiveCourseChange) onActiveCourseChange(index); }} > {course.name} {/* Active in...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ setActiveCourseId(course.id); setLocalCourseIndex(idx); if (onActiveCourseChange) onActiveCourseChange(idx); document.getElementById('course-drop...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ const dropdown = document.getElementById('course-dropdown'); if (dropdown) { dropdown.classList.toggle('hidden'); } }} > {cohort.courses[localCou...`**: Triggers component state transitions or API events associated with the action handler.
- **`Try again (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/CohortMemberManagement.tsx`

**Purpose:** A functional block handling CohortMemberManagement logic and presentation.

**Functions / Logic:**
- **`CohortMemberManagement`**: Main functional React component responsible for rendering and composing the CohortMemberManagement views and logic.
- **`InviteModal`**: Main functional React component responsible for rendering and composing the InviteModal views and logic.
- **`addMembers`**: Utility function to process 'addMembers' logic within the component context.
- **`areAllMembersSelected`**: Utility function to process 'areAllMembersSelected' logic within the component context.
- **`confirmDeleteMember`**: Utility function to process 'confirmDeleteMember' logic within the component context.
- **`handleAddMembers`**: Event handler triggered to execute the AddMembers related UI/state action.
- **`handleCloseInviteDialog`**: Event handler triggered to execute the CloseInviteDialog related UI/state action.
- **`handleDeleteMember`**: Event handler triggered to execute the DeleteMember related UI/state action.
- **`handleDeleteSelectedMembers`**: Event handler triggered to execute the DeleteSelectedMembers related UI/state action.
- **`handleMemberSelection`**: Event handler triggered to execute the MemberSelection related UI/state action.
- **`handleSelectAllMembers`**: Event handler triggered to execute the SelectAllMembers related UI/state action.
- **`handleSubmit`**: Event handler triggered to execute the Submit related UI/state action.
- **`validateEmail`**: Utility function to process 'validateEmail' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`{ const newId = Math.random().toString(); setEmailInputs([...emailInputs, { id: newId, email: '' }]); setFocusedInputId(newId); setNewlyAddedId(new...`**: Triggers component state transitions or API events associated with the action handler.
- **`Remove ({selectedMembers.length}) (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setIsAddMemberOpen(true)} > {roleText.buttonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleDeleteMember(member)} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors focus:outline-none...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ onClose(); setEmailInputs([{ id: '1', email: '' }]); }} className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-wh...`**: Triggers component state transitions or API events associated with the action handler.
- **`fileInputRef.current?.click()} className="flex items-center gap-4 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transitio...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ setEmailInputs(emailInputs.filter(e => e.id !== input.id)); }} className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white...`**: Triggers component state transitions or API events associated with the action handler.
- **`{isSubmitting ? (role === 'learner' ? 'Inviting...' : 'Adding...') : submitButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/ConfirmationDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`ConfirmationDialog`**: Main functional React component responsible for rendering and composing the ConfirmationDialog views and logic.
- **`handleClose`**: Event handler triggered to execute the Close related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`{ e.stopPropagation(); onCancel(); }} className="px-4 py-2 transition-colors focus:outline-none cursor-pointer text-gray-500 dark:text-gray-400 hov...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); handleClose(); }} > (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); onConfirm(); }} className={`px-6 py-2 ${buttonBgColor} ${type === 'save' ? 'text-black' : 'text-white'} text-sm font-medium ...`**: Triggers component state transitions or API events associated with the action handler.

### `components/ConnectNotionButton.tsx`

**Purpose:** A functional block handling ConnectNotionButton logic and presentation.

**Functions / Logic:**
- **`ConnectNotionButton`**: Main functional React component responsible for rendering and composing the ConnectNotionButton views and logic.

**Interactive Elements (Buttons / Actions):**
- **`{isLoading ? ( {loadingText} ) : ( {icon && {icon}} {normalText} {tooltip && } )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/CourseCard.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`CourseCard`**: Main functional React component responsible for rendering and composing the CourseCard views and logic.
- **`getBorderColor`**: Retrieves/fetches data from the state or API regarding rderColor.
- **`getLinkPath`**: Retrieves/fetches data from the state or API regarding nkPath.
- **`handleDeleteClick`**: Event handler triggered to execute the DeleteClick related UI/state action.
- **`handleDeleteConfirm`**: Event handler triggered to execute the DeleteConfirm related UI/state action.
- **`handleDuplicateClick`**: Event handler triggered to execute the DuplicateClick related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`{isDuplicating ? ( ) : ( )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/CourseCohortSelectionDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`CourseCohortSelectionDialog`**: Main functional React component responsible for rendering and composing the CourseCohortSelectionDialog views and logic.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleConfirm`**: Event handler triggered to execute the Confirm related UI/state action.
- **`handleCreateCohortClick`**: Event handler triggered to execute the CreateCohortClick related UI/state action.
- **`updatePosition`**: Updates or mutates the internal state for updatePosition.

**Interactive Elements (Buttons / Actions):**
- **`Make a new cohort (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{buttonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Try again (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Create cohort (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/CourseItemDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`checkUnsavedScorecardChangesBeforeAction`**: Utility function to process 'checkUnsavedScorecardChangesBeforeAction' logic within the component context.
- **`displayToast`**: Utility function to process 'displayToast' logic within the component context.
- **`getButtonClasses`**: Retrieves/fetches data from the state or API regarding ttonClasses.
- **`handleBeforeUnload`**: Event handler triggered to execute the BeforeUnload related UI/state action.
- **`handleCancelClosingDialog`**: Event handler triggered to execute the CancelClosingDialog related UI/state action.
- **`handleCancelEditClick`**: Event handler triggered to execute the CancelEditClick related UI/state action.
- **`handleCancelSave`**: Event handler triggered to execute the CancelSave related UI/state action.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleCloseRequest`**: Event handler triggered to execute the CloseRequest related UI/state action.
- **`handleConfirmDiscardChanges`**: Event handler triggered to execute the ConfirmDiscardChanges related UI/state action.
- **`handleConfirmSaveDraft`**: Event handler triggered to execute the ConfirmSaveDraft related UI/state action.
- **`handleConfirmSavePublished`**: Event handler triggered to execute the ConfirmSavePublished related UI/state action.
- **`handleDialogBackdropClick`**: Event handler triggered to execute the DialogBackdropClick related UI/state action.
- **`handleDiscardScorecardChanges`**: Event handler triggered to execute the DiscardScorecardChanges related UI/state action.
- **`handleGoBackToScorecard`**: Event handler triggered to execute the GoBackToScorecard related UI/state action.
- **`handleKeyDown`**: Event handler triggered to execute the KeyDown related UI/state action.
- **`handlePopState`**: Event handler triggered to execute the PopState related UI/state action.
- **`handleSaveClick`**: Event handler triggered to execute the SaveClick related UI/state action.
- **`onSaveItem`**: Utility function to process 'onSaveItem' logic within the component context.
- **`togglePreviewMode`**: Utility function to process 'togglePreviewMode' logic within the component context.
- **`verifyScheduledDateAndSchedule`**: Utility function to process 'verifyScheduledDateAndSchedule' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`Save (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Scheduled (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Edit (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ checkUnsavedScorecardChangesBeforeAction(() => { // For quizzes, validate before showing publish confirmation if (activeItem?.type === 'quiz' && ...`**: Triggers component state transitions or API events associated with the action handler.
- **`setShowSchedulePicker(false)} className="px-3 py-1 text-xs rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-[#444444]...`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{previewMode ? ( <> Exit preview ) : ( <> Preview )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ checkUnsavedScorecardChangesBeforeAction(() => { handleConfirmSaveDraft(); }); }} className={`${getButtonClasses('yellow')} mr-3`} aria-label={`S...`**: Triggers component state transitions or API events associated with the action handler.
- **`setShowSchedulePicker(!showSchedulePicker)} className={getButtonClasses('yellowStrong')} aria-label="Set scheduled publication date" > {formatSched...`**: Triggers component state transitions or API events associated with the action handler.

### `components/CourseModuleList.tsx`

**Purpose:** A functional block handling CourseModuleList logic and presentation.

**Functions / Logic:**
- **`CourseModuleList`**: Main functional React component responsible for rendering and composing the CourseModuleList views and logic.
- **`blend`**: Utility function to process 'blend' logic within the component context.
- **`checkDarkMode`**: Utility function to process 'checkDarkMode' logic within the component context.
- **`focusEditor`**: Utility function to process 'focusEditor' logic within the component context.
- **`formatUnlockDate`**: Utility function to process 'formatUnlockDate' logic within the component context.
- **`getEffectiveBackgroundColor`**: Retrieves/fetches data from the state or API regarding fectiveBackgroundColor.
- **`getFallbackColor`**: Retrieves/fetches data from the state or API regarding llbackColor.
- **`getIsExpanded`**: Retrieves/fetches data from the state or API regarding Expanded.
- **`getItemTypeName`**: Retrieves/fetches data from the state or API regarding emTypeName.
- **`getSequentialPaletteColor`**: Retrieves/fetches data from the state or API regarding quentialPaletteColor.
- **`handleCancelModuleDelete`**: Event handler triggered to execute the CancelModuleDelete related UI/state action.
- **`handleCancelTaskDelete`**: Event handler triggered to execute the CancelTaskDelete related UI/state action.
- **`handleConfirmModuleDelete`**: Event handler triggered to execute the ConfirmModuleDelete related UI/state action.
- **`handleConfirmTaskDelete`**: Event handler triggered to execute the ConfirmTaskDelete related UI/state action.
- **`handleDeleteTask`**: Event handler triggered to execute the DeleteTask related UI/state action.
- **`handleDuplicateTask`**: Event handler triggered to execute the DuplicateTask related UI/state action.
- **`handleModuleClick`**: Event handler triggered to execute the ModuleClick related UI/state action.
- **`handleMoveModuleDown`**: Event handler triggered to execute the MoveModuleDown related UI/state action.
- **`handleMoveModuleUp`**: Event handler triggered to execute the MoveModuleUp related UI/state action.
- **`handleMoveTaskDown`**: Event handler triggered to execute the MoveTaskDown related UI/state action.
- **`handleMoveTaskUp`**: Event handler triggered to execute the MoveTaskUp related UI/state action.
- **`hslToRgb`**: Utility function to process 'hslToRgb' logic within the component context.
- **`hue2rgb`**: Utility function to process 'hue2rgb' logic within the component context.
- **`rgbToHsl`**: Utility function to process 'rgbToHsl' logic within the component context.
- **`swapModules`**: Utility function to process 'swapModules' logic within the component context.
- **`swapTasks`**: Utility function to process 'swapTasks' logic within the component context.
- **`toRgb`**: Utility function to process 'toRgb' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`{ e.stopPropagation(); cancelModuleEditing(module.id); }} className="px-3 py-1 text-sm text-gray-700 dark:text-gray-300 hover:text-black dark:hover...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); setModuleToDelete(module.id); }} className="p-1 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white tran...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); handleMoveTaskUp(module.id, item.id); }} disabled={itemIndex === 0 || swappingTaskUpId === item.id} className="p-1 text-gray...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); if (onDeleteItem) { setTaskToDelete({ moduleId: module.id, itemId: item.id, itemType: item.type }); } }} className="p-1 text...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); handleMoveTaskDown(module.id, item.id); }} disabled={itemIndex === module.items.length - 1 || swappingTaskDownId === item.id...`**: Triggers component state transitions or API events associated with the action handler.
- **`{isItemCompleted ? ( ) : null} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ if (onAddAssignment) { try { await onAddAssignment(module.id); } catch (error) { console.error("Failed to add assignment:", error); } } }} classN...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); handleMoveModuleDown(module.id); }} disabled={index === modules.length - 1 || swappingModuleDownId === module.id} className=...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); // Prevent toggling locked modules if (module.unlockAt) return; onToggleModule(module.id); }} className={`flex items-center ...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); handleDuplicateTask(module.id, item.id); }} disabled={duplicatingTaskId === item.id} className="p-1 text-gray-600 dark:text-...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ if (onAddQuiz) { try { await onAddQuiz(module.id); } catch (error) { console.error("Failed to add quiz:", error); } } }} className="flex items-ce...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); saveModuleTitle(module.id); }} className="px-3 py-1 text-sm text-black bg-gray-300 hover:bg-gray-400 border border-black hov...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); if (onEditModuleTitle) { onEditModuleTitle(module.id); } }} className="px-3 py-1 text-sm text-black bg-gray-300 hover:bg-gra...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); handleMoveModuleUp(module.id); }} disabled={index === 0 || swappingModuleUpId === module.id} className="p-1 text-gray-600 da...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ if (onAddLearningMaterial) { try { await onAddLearningMaterial(module.id); } catch (error) { console.error("Failed to add learning material:", er...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); // Prevent toggling locked modules if (module.unlockAt) return; onToggleModule(module.id); }} className={`hidden sm:block mr...`**: Triggers component state transitions or API events associated with the action handler.

### `components/CoursePublishSuccessBanner.tsx`

**Purpose:** A functional block handling CoursePublishSuccessBanner logic and presentation.

**Functions / Logic:**
- **`handleCopyInviteLink`**: Event handler triggered to execute the CopyInviteLink related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`{isCopied ? ( <> Copied ) : ( <> Copy invite link )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{isCohortSource ? "Back to Cohort" : "Back to Course"} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/CreateBatchDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`CreateBatchDialog`**: Main functional React component responsible for rendering and composing the CreateBatchDialog views and logic.
- **`LearnerCard`**: Main functional React component responsible for rendering and composing the LearnerCard views and logic.
- **`LearnerColumn`**: Main functional React component responsible for rendering and composing the LearnerColumn views and logic.
- **`MentorCard`**: Main functional React component responsible for rendering and composing the MentorCard views and logic.
- **`MentorColumn`**: Main functional React component responsible for rendering and composing the MentorColumn views and logic.
- **`handleCancelEdit`**: Event handler triggered to execute the CancelEdit related UI/state action.
- **`handleCreate`**: Event handler triggered to execute the Create related UI/state action.
- **`handleEditSave`**: Event handler triggered to execute the EditSave related UI/state action.
- **`handleEnterEdit`**: Event handler triggered to execute the EnterEdit related UI/state action.
- **`handleLearnerSelection`**: Event handler triggered to execute the LearnerSelection related UI/state action.
- **`handleMentorSelection`**: Event handler triggered to execute the MentorSelection related UI/state action.
- **`handleNameKeyDown`**: Event handler triggered to execute the NameKeyDown related UI/state action.
- **`handleSelectAllLearners`**: Event handler triggered to execute the SelectAllLearners related UI/state action.
- **`handleSelectAllMentors`**: Event handler triggered to execute the SelectAllMentors related UI/state action.
- **`hasChanges`**: Utility function to process 'hasChanges' logic within the component context.
- **`renderContent`**: Helper function to render the specific Content UI section.
- **`renderCreateEditContent`**: Helper function to render the specific CreateEditContent UI section.
- **`renderHeader`**: Helper function to render the specific Header UI section.
- **`renderViewContent`**: Helper function to render the specific ViewContent UI section.
- **`resetSelectionFromBatch`**: Utility function to process 'resetSelectionFromBatch' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`Save (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Edit (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onRequestDelete(batch)} className="flex items-center space-x-2 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 tr...`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleLearnerSelection(learner)} className={`flex items-center space-x-3 p-4 rounded-lg transition-colors cursor-pointer ${selectedLearners.some(l ...`**: Triggers component state transitions or API events associated with the action handler.
- **`{isCreating ? 'Creating...' : 'Create'} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleMentorSelection(mentor)} className={`flex items-center space-x-3 p-4 rounded-lg transition-colors cursor-pointer ${selectedMentors.some(m => ...`**: Triggers component state transitions or API events associated with the action handler.

### `components/CreateCohortDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`CreateCohortDialog`**: Main functional React component responsible for rendering and composing the CreateCohortDialog views and logic.
- **`handleSubmit`**: Event handler triggered to execute the Submit related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`{isLoading ? ( ) : 'Create cohort'} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/CreateCourseDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`CreateCourseDialog`**: Main functional React component responsible for rendering and composing the CreateCourseDialog views and logic.
- **`handleSubmit`**: Event handler triggered to execute the Submit related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`{isLoading ? ( ) : 'Create course'} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/DescriptionEditModal.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`DescriptionEditModal`**: Main functional React component responsible for rendering and composing the DescriptionEditModal views and logic.
- **`handleSave`**: Event handler triggered to execute the Save related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Save (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/DripPublishingConfig.tsx`

**Purpose:** A functional block handling DripPublishingConfig logic and presentation.

**Functions / Logic:**
- **`handleCloseToast`**: Event handler triggered to execute the CloseToast related UI/state action.
- **`handleValidationError`**: Event handler triggered to execute the ValidationError related UI/state action.

### `components/Dropdown.tsx`

**Purpose:** A functional block handling Dropdown logic and presentation.

**Functions / Logic:**
- **`content`**: Utility function to process 'content' logic within the component context.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleOptionSelect`**: Event handler triggered to execute the OptionSelect related UI/state action.
- **`isSelected`**: Utility function to process 'isSelected' logic within the component context.
- **`renderDropdownSelectable`**: Helper function to render the specific DropdownSelectable UI section.
- **`toggleDropdown`**: Utility function to process 'toggleDropdown' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`{ e.stopPropagation(); handleOptionSelect(option); }} > (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/EvaluationCriteriaEditor.tsx`

**Purpose:** A functional block handling EvaluationCriteriaEditor logic and presentation.

**Functions / Logic:**
- **`EvaluationCriteriaEditor`**: Main functional React component responsible for rendering and composing the EvaluationCriteriaEditor views and logic.
- **`renderScoreInput`**: Helper function to render the specific ScoreInput UI section.

### `components/GenerateWithAIDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`GenerateWithAIDialog`**: Main functional React component responsible for rendering and composing the GenerateWithAIDialog views and logic.
- **`getStepContent`**: Retrieves/fetches data from the state or API regarding epContent.
- **`handleDialogClose`**: Event handler triggered to execute the DialogClose related UI/state action.
- **`handleFileChange`**: Event handler triggered to execute the FileChange related UI/state action.
- **`handleSubmit`**: Event handler triggered to execute the Submit related UI/state action.
- **`handleTextChange`**: Event handler triggered to execute the TextChange related UI/state action.
- **`nextStep`**: Utility function to process 'nextStep' logic within the component context.
- **`noop`**: Utility function to process 'noop' logic within the component context.
- **`onDocumentLoadSuccess`**: Utility function to process 'onDocumentLoadSuccess' logic within the component context.
- **`prevStep`**: Utility function to process 'prevStep' logic within the component context.
- **`progressPercentage`**: Utility function to process 'progressPercentage' logic within the component context.
- **`removeFile`**: Utility function to process 'removeFile' logic within the component context.
- **`resetState`**: Utility function to process 'resetState' logic within the component context.
- **`triggerFileInput`**: Utility function to process 'triggerFileInput' logic within the component context.
- **`validateCurrentStep`**: Utility function to process 'validateCurrentStep' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`{isSubmitting && currentStep === 'review' ? ( <> Generating... ) : currentStep === 'review' ? ( <> Generate Course ) : ( <> Continue )} (Action: No...`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Back (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/InviteMembersDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`InviteMembersDialog`**: Main functional React component responsible for rendering and composing the InviteMembersDialog views and logic.
- **`addEmailRow`**: Utility function to process 'addEmailRow' logic within the component context.
- **`getIconClasses`**: Retrieves/fetches data from the state or API regarding onClasses.
- **`getInputBorderClasses`**: Retrieves/fetches data from the state or API regarding putBorderClasses.
- **`handleEmailChange`**: Event handler triggered to execute the EmailChange related UI/state action.
- **`handleSubmit`**: Event handler triggered to execute the Submit related UI/state action.
- **`removeEmailRow`**: Utility function to process 'removeEmailRow' logic within the component context.
- **`validateAllEmails`**: Utility function to process 'validateAllEmails' logic within the component context.
- **`validateEmail`**: Utility function to process 'validateEmail' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`Invite (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`removeEmailRow(index)} className="transition-colors p-2 cursor-pointer focus:outline-none self-start mt-1.5 text-gray-600 dark:text-gray-400 hover:...`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Add another email (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/KnowledgeBaseEditor.tsx`

**Purpose:** A functional block handling KnowledgeBaseEditor logic and presentation.

**Functions / Logic:**
- **`KnowledgeBaseEditor`**: Main functional React component responsible for rendering and composing the KnowledgeBaseEditor views and logic.
- **`hasKnowledgeBaseContent`**: Utility function to process 'hasKnowledgeBaseContent' logic within the component context.

### `components/LearnerAssignmentView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`LearnerAssignmentView`**: Main functional React component responsible for rendering and composing the LearnerAssignmentView views and logic.
- **`fetchAssignmentData`**: Retrieves/fetches data from the state or API regarding AssignmentData.
- **`fetchChatHistory`**: Retrieves/fetches data from the state or API regarding ChatHistory.
- **`handleFileSubmit`**: Event handler triggered to execute the FileSubmit related UI/state action.
- **`handleKeyDown`**: Event handler triggered to execute the KeyDown related UI/state action.
- **`loadDraft`**: Utility function to process 'loadDraft' logic within the component context.
- **`processStream`**: Utility function to process 'processStream' logic within the component context.
- **`processUserResponse`**: Utility function to process 'processUserResponse' logic within the component context.

**Major Sections:**
- **Div: flex flex-col h-full overflow-auto lg:border-l lg:border-t-0 sm:border-t sm...**: Structural container defining a discrete area of the layout.

### `components/LearnerCohortView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`LearnerCohortView`**: Main functional React component responsible for rendering and composing the LearnerCohortView views and logic.
- **`getActiveCourse`**: Retrieves/fetches data from the state or API regarding tiveCourse.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleCourseDropdownSelect`**: Event handler triggered to execute the CourseDropdownSelect related UI/state action.
- **`handleCourseSelect`**: Event handler triggered to execute the CourseSelect related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`setActiveMobileTab(MobileTab.Course)} > Course (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setMobileDropdownOpen(true)} className="w-full text-left py-3 px-1 border-b flex items-center justify-between cursor-pointer group transition-opaci...`**: Triggers component state transitions or API events associated with the action handler.
- **`setActiveMobileTab(MobileTab.Progress)} > Progress (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleCourseSelect(index)} ref={el => { courseTabRefs.current[index] = el; }} > {course.name} {/* Active indicator - visible only for active tab */...`**: Triggers component state transitions or API events associated with the action handler.

### `components/LearnerCourseView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`LearnerCourseView`**: Main functional React component responsible for rendering and composing the LearnerCourseView views and logic.
- **`activateQuestion`**: Utility function to process 'activateQuestion' logic within the component context.
- **`checkModuleCompletion`**: Utility function to process 'checkModuleCompletion' logic within the component context.
- **`closeDialog`**: Utility function to process 'closeDialog' logic within the component context.
- **`executeActivateQuestion`**: Utility function to process 'executeActivateQuestion' logic within the component context.
- **`executeGoToNextTask`**: Utility function to process 'executeGoToNextTask' logic within the component context.
- **`executeGoToPreviousTask`**: Utility function to process 'executeGoToPreviousTask' logic within the component context.
- **`executeOpenTaskItem`**: Utility function to process 'executeOpenTaskItem' logic within the component context.
- **`generateRandomOrigin`**: Utility function to process 'generateRandomOrigin' logic within the component context.
- **`getNextTaskInfo`**: Retrieves/fetches data from the state or API regarding xtTaskInfo.
- **`getPreviousTaskInfo`**: Retrieves/fetches data from the state or API regarding eviousTaskInfo.
- **`getRandomMessage`**: Retrieves/fetches data from the state or API regarding ndomMessage.
- **`goToNextTask`**: Utility function to process 'goToNextTask' logic within the component context.
- **`goToPreviousTask`**: Utility function to process 'goToPreviousTask' logic within the component context.
- **`handleDialogBackdropClick`**: Event handler triggered to execute the DialogBackdropClick related UI/state action.
- **`handleKeyDown`**: Event handler triggered to execute the KeyDown related UI/state action.
- **`handleNavigationCancel`**: Event handler triggered to execute the NavigationCancel related UI/state action.
- **`handleNavigationConfirm`**: Event handler triggered to execute the NavigationConfirm related UI/state action.
- **`isFirstTask`**: Utility function to process 'isFirstTask' logic within the component context.
- **`isLastTask`**: Utility function to process 'isLastTask' logic within the component context.
- **`markTaskComplete`**: Utility function to process 'markTaskComplete' logic within the component context.
- **`openTaskItem`**: Utility function to process 'openTaskItem' logic within the component context.
- **`toggleModule`**: Utility function to process 'toggleModule' logic within the component context.
- **`toggleSidebar`**: Utility function to process 'toggleSidebar' logic within the component context.
- **`triggerConfetti`**: Utility function to process 'triggerConfetti' logic within the component context.
- **`triggerModuleCompletionCelebration`**: Utility function to process 'triggerModuleCompletionCelebration' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`{isMarkingComplete ? ( <> ) : ( <> Mark Complete )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Completed (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Back to course (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{getPreviousTaskInfo()?.title} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{getNextTaskInfo()?.title} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/LearnerQuizView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`LearnerQuizView`**: Main functional React component responsible for rendering and composing the LearnerQuizView views and logic.
- **`convertScorecardToList`**: Utility function to process 'convertScorecardToList' logic within the component context.
- **`fetchChatHistory`**: Retrieves/fetches data from the state or API regarding ChatHistory.
- **`handleBackToChat`**: Event handler triggered to execute the BackToChat related UI/state action.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleCodeStateChange`**: Event handler triggered to execute the CodeStateChange related UI/state action.
- **`handleKeyDown`**: Event handler triggered to execute the KeyDown related UI/state action.
- **`handleViewScorecard`**: Event handler triggered to execute the ViewScorecard related UI/state action.
- **`loadDraft`**: Utility function to process 'loadDraft' logic within the component context.
- **`processStream`**: Utility function to process 'processStream' logic within the component context.
- **`setViewMode`**: Updates or mutates the internal state for setViewMode.
- **`toggleMobileMenu`**: Utility function to process 'toggleMobileMenu' logic within the component context.

**Major Sections:**
- **Div: flex flex-col h-full overflow-auto lg:border-l lg:border-t-0 sm:border-t sm...**: Structural container defining a discrete area of the layout.
- **Div: p-6 flex flex-col lg:border-r lg:border-b-0 sm:border-b sm:border-r-0 quest...**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`{isMobileMenuOpen ? ( ) : ( mobileViewMode === 'split' ? ( ) : mobileViewMode === 'question-full' ? ( ) : ( ) )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`0 ? 'hover:bg-gray-200 cursor-pointer dark:hover:bg-[#333333] cursor-pointer' : 'opacity-50 cursor-not-allowed'}`} onClick={goToPreviousQuestion} d...`**: Triggers component state transitions or API events associated with the action handler.
- **`setViewMode('split')} className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-md cursor-pointer hover:bg...`**: Triggers component state transitions or API events associated with the action handler.
- **`setViewMode('chat-full')} className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-md cursor-pointer hove...`**: Triggers component state transitions or API events associated with the action handler.
- **`setViewMode('question-full')} className="w-12 h-12 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-md cursor-pointer ...`**: Triggers component state transitions or API events associated with the action handler.
- **`= validQuestions.length - 1} > (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/LearnerScorecard.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`toggleExpand`**: Utility function to process 'toggleExpand' logic within the component context.

### `components/LearningMaterialEditor.tsx`

**Purpose:** A functional block handling LearningMaterialEditor logic and presentation.

**Functions / Logic:**
- **`checkContent`**: Utility function to process 'checkContent' logic within the component context.
- **`handleCancel`**: Event handler triggered to execute the Cancel related UI/state action.
- **`handleCancelPublish`**: Event handler triggered to execute the CancelPublish related UI/state action.
- **`handleConfirmPublish`**: Event handler triggered to execute the ConfirmPublish related UI/state action.
- **`handleEditorChange`**: Event handler triggered to execute the EditorChange related UI/state action.
- **`handleIntegrationPageRemove`**: Event handler triggered to execute the IntegrationPageRemove related UI/state action.
- **`handleIntegrationPageSelect`**: Event handler triggered to execute the IntegrationPageSelect related UI/state action.
- **`handleSave`**: Event handler triggered to execute the Save related UI/state action.
- **`setEditorInstance`**: Updates or mutates the internal state for setEditorInstance.

### `components/LearningMaterialLinker.tsx`

**Purpose:** A functional block handling LearningMaterialLinker logic and presentation.

**Functions / Logic:**
- **`LearningMaterialLinker`**: Main functional React component responsible for rendering and composing the LearningMaterialLinker views and logic.
- **`fetchLearningMaterials`**: Retrieves/fetches data from the state or API regarding LearningMaterials.
- **`fetchLinkedMaterials`**: Retrieves/fetches data from the state or API regarding LinkedMaterials.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleLearningMaterialSearch`**: Event handler triggered to execute the LearningMaterialSearch related UI/state action.
- **`removeLearningMaterial`**: Utility function to process 'removeLearningMaterial' logic within the component context.
- **`renderEditableView`**: Helper function to render the specific EditableView UI section.
- **`renderReadOnlyView`**: Helper function to render the specific ReadOnlyView UI section.
- **`selectLearningMaterial`**: Utility function to process 'selectLearningMaterial' logic within the component context.
- **`toggleLearningMaterialDropdown`**: Utility function to process 'toggleLearningMaterialDropdown' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Link learning material (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); removeLearningMaterial(material.id); }} className="text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white c...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); removeLearningMaterial(material.id); }} className="text-gray-400 hover:text-white cursor-pointer" > (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/LearningMaterialViewer.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`LearningMaterialViewer`**: Main functional React component responsible for rendering and composing the LearningMaterialViewer views and logic.
- **`checkMobileView`**: Utility function to process 'checkMobileView' logic within the component context.
- **`handleAskDoubt`**: Event handler triggered to execute the AskDoubt related UI/state action.
- **`handleAudioSubmit`**: Event handler triggered to execute the AudioSubmit related UI/state action.
- **`handleChatInputChange`**: Event handler triggered to execute the ChatInputChange related UI/state action.
- **`handleChatSubmit`**: Event handler triggered to execute the ChatSubmit related UI/state action.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleRetry`**: Event handler triggered to execute the Retry related UI/state action.
- **`handleViewScorecard`**: Event handler triggered to execute the ViewScorecard related UI/state action.
- **`processStream`**: Utility function to process 'processStream' logic within the component context.
- **`toggleMobileMenu`**: Utility function to process 'toggleMobileMenu' logic within the component context.

**Major Sections:**
- **Div: py-6 flex flex-col h-full content-container bg-white dark:bg-[#1A1A1A]**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`{ setIsMobileMenuOpen(false); onMarkComplete(); }} className="mobile-action-button rounded-full flex items-center justify-center shadow-md cursor-p...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ setIsMobileMenuOpen(false); handleAskDoubt(); }} className="mobile-action-button rounded-full flex items-center justify-center shadow-md cursor-p...`**: Triggers component state transitions or API events associated with the action handler.
- **`{ // For desktop view OR mobile view with no onMarkComplete, directly trigger handleAskDoubt if (!isMobileView || !onMarkComplete) { // For desktop...`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/LearningStreak.tsx`

**Purpose:** A functional block handling LearningStreak logic and presentation.

**Functions / Logic:**
- **`LearningStreak`**: Main functional React component responsible for rendering and composing the LearningStreak views and logic.
- **`isDayActive`**: Utility function to process 'isDayActive' logic within the component context.

### `components/MemberSchoolViewHeader.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`setCohortDropdownOpen(!cohortDropdownOpen)} > {activeCohort?.name} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setBatchDropdownOpen(!batchDropdownOpen)} > {batches.find(b => b.id === activeBatchId)?.name || 'Select Batch'} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/MentorCohortView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MentorCohortView`**: Main functional React component responsible for rendering and composing the MentorCohortView views and logic.
- **`fetchCohortMembers`**: Retrieves/fetches data from the state or API regarding CohortMembers.
- **`fetchSchoolSlug`**: Retrieves/fetches data from the state or API regarding SchoolSlug.
- **`handleViewModeToggle`**: Event handler triggered to execute the ViewModeToggle related UI/state action.
- **`isValidViewMode`**: Utility function to process 'isValidViewMode' logic within the component context.
- **`updateUrlWithViewMode`**: Updates or mutates the internal state for updateUrlWithViewMode.

**Interactive Elements (Buttons / Actions):**
- **`handleViewModeToggle('mentor')} className={`flex items-center px-4 py-2 rounded-full text-sm font-light transition-all cursor-pointer ${viewMode ==...`**: Triggers component state transitions or API events associated with the action handler.
- **`handleViewModeToggle('learner')} className={`flex items-center px-4 py-2 rounded-full text-sm font-light transition-all cursor-pointer ${viewMode =...`**: Triggers component state transitions or API events associated with the action handler.

### `components/MobileDropdown.tsx`

**Purpose:** A functional block handling MobileDropdown logic and presentation.

**Functions / Logic:**
- **`handleBackdropClick`**: Event handler triggered to execute the BackdropClick related UI/state action.
- **`handleOptionSelect`**: Event handler triggered to execute the OptionSelect related UI/state action.
- **`isOptionSelected`**: Utility function to process 'isOptionSelected' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`handleOptionSelect(option)} > {renderOption ? renderOption(option, isOptionSelected(option)) : option.label} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/ModuleCompletionSound.tsx`

**Purpose:** A functional block handling ModuleCompletionSound logic and presentation.

**Functions / Logic:**
- **`ModuleCompletionSound`**: Main functional React component responsible for rendering and composing the ModuleCompletionSound views and logic.
- **`createOscillator`**: Utility function to process 'createOscillator' logic within the component context.
- **`createVictorySound`**: Utility function to process 'createVictorySound' logic within the component context.

### `components/NotionIntegration.tsx`

**Purpose:** A functional block handling NotionIntegration logic and presentation.

**Functions / Logic:**
- **`NotionIcon`**: Main functional React component responsible for rendering and composing the NotionIcon views and logic.
- **`NotionIntegration`**: Main functional React component responsible for rendering and composing the NotionIntegration views and logic.
- **`checkForUpdates`**: Utility function to process 'checkForUpdates' logic within the component context.
- **`handleAddMorePages`**: Event handler triggered to execute the AddMorePages related UI/state action.
- **`handleCancelOverwrite`**: Event handler triggered to execute the CancelOverwrite related UI/state action.
- **`handleCancelUnlink`**: Event handler triggered to execute the CancelUnlink related UI/state action.
- **`handleConfirmOverwrite`**: Event handler triggered to execute the ConfirmOverwrite related UI/state action.
- **`handleConfirmUnlink`**: Event handler triggered to execute the ConfirmUnlink related UI/state action.
- **`handleConnectNotion`**: Event handler triggered to execute the ConnectNotion related UI/state action.
- **`handlePageSelect`**: Event handler triggered to execute the PageSelect related UI/state action.
- **`handleSyncNotionBlocks`**: Event handler triggered to execute the SyncNotionBlocks related UI/state action.
- **`handleUnlinkPage`**: Event handler triggered to execute the UnlinkPage related UI/state action.
- **`hasExistingContent`**: Utility function to process 'hasExistingContent' logic within the component context.
- **`showNestedPagesToast`**: Utility function to process 'showNestedPagesToast' logic within the component context.
- **`showNoPagesToast`**: Utility function to process 'showNoPagesToast' logic within the component context.

### `components/PublishConfirmationDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`PublishConfirmationDialog`**: Main functional React component responsible for rendering and composing the PublishConfirmationDialog views and logic.
- **`handleConfirm`**: Event handler triggered to execute the Confirm related UI/state action.
- **`renderScheduleOptions`**: Helper function to render the specific ScheduleOptions UI section.
- **`verifyScheduledDateAndSchedulePublish`**: Utility function to process 'verifyScheduledDateAndSchedulePublish' logic within the component context.

### `components/QuizEditor.tsx`

**Purpose:** A functional block handling QuizEditor logic and presentation.

**Functions / Logic:**
- **`EmptyQuizPlaceholder`**: Main functional React component responsible for rendering and composing the EmptyQuizPlaceholder views and logic.
- **`fetchQuestions`**: Retrieves/fetches data from the state or API regarding Questions.
- **`fetchSchoolScorecards`**: Retrieves/fetches data from the state or API regarding SchoolScorecards.
- **`getKnowledgeBaseContent`**: Retrieves/fetches data from the state or API regarding owledgeBaseContent.
- **`handleCancel`**: Event handler triggered to execute the Cancel related UI/state action.
- **`handleCancelPublish`**: Event handler triggered to execute the CancelPublish related UI/state action.
- **`handleIntegrationPageRemove`**: Event handler triggered to execute the IntegrationPageRemove related UI/state action.
- **`handleIntegrationPageSelect`**: Event handler triggered to execute the IntegrationPageSelect related UI/state action.
- **`handleSavePublishedQuiz`**: Event handler triggered to execute the SavePublishedQuiz related UI/state action.
- **`return`**: Utility function to process 'return' logic within the component context.
- **`updateCurrentQuestionId`**: Updates or mutates the internal state for updateCurrentQuestionId.
- **`updateDraftQuiz`**: Updates or mutates the internal state for updateDraftQuiz.

**Interactive Elements (Buttons / Actions):**
- **`Add question (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); setShowDeleteConfirm(true); }} className="opacity-0 cursor-pointer group-hover:opacity-100 ml-2 p-1 text-red-400 hover:text-...`**: Triggers component state transitions or API events associated with the action handler.
- **`setActiveEditorTab('answer')} > Correct answer (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setActiveEditorTab('question')} > Question (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setActiveEditorTab('knowledge')} > AI training resources (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setActiveEditorTab('scorecard')} > Scorecard (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/SchoolPickerDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`SchoolPickerDialog`**: Main functional React component responsible for rendering and composing the SchoolPickerDialog views and logic.

**Interactive Elements (Buttons / Actions):**
- **`Create a School (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onSelectSchool(school.id)} className="w-full px-4 py-3 text-left rounded-lg transition-colors focus:outline-none cursor-pointer flex justify-betwee...`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/Scorecard.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`closeToast`**: Utility function to process 'closeToast' logic within the component context.
- **`handleAddCriterion`**: Event handler triggered to execute the AddCriterion related UI/state action.
- **`handleCancel`**: Event handler triggered to execute the Cancel related UI/state action.
- **`handleDeleteCriterion`**: Event handler triggered to execute the DeleteCriterion related UI/state action.
- **`handleHighlightCriterion`**: Event handler triggered to execute the HighlightCriterion related UI/state action.
- **`handleKeyDown`**: Event handler triggered to execute the KeyDown related UI/state action.
- **`handleSave`**: Event handler triggered to execute the Save related UI/state action.
- **`openDescriptionModal`**: Utility function to process 'openDescriptionModal' logic within the component context.
- **`saveChanges`**: Utility function to process 'saveChanges' logic within the component context.
- **`saveDescriptionFromModal`**: Utility function to process 'saveDescriptionFromModal' logic within the component context.
- **`startEditing`**: Utility function to process 'startEditing' logic within the component context.
- **`validateCriteriaForSave`**: Utility function to process 'validateCriteriaForSave' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`Save (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Add (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleDeleteCriterion(index)} className="p-1 rounded-full hover:bg-red-100 dark:hover:bg-[#4F2828] text-gray-400 dark:text-gray-500 hover:text-red-...`**: Triggers component state transitions or API events associated with the action handler.

### `components/ScorecardManager.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`fetchSchoolScorecards`**: Retrieves/fetches data from the state or API regarding SchoolScorecards.
- **`fetchScorecardById`**: Retrieves/fetches data from the state or API regarding ScorecardById.
- **`handleCreateNewScorecard`**: Event handler triggered to execute the CreateNewScorecard related UI/state action.
- **`handleOpenScorecardDialog`**: Event handler triggered to execute the OpenScorecardDialog related UI/state action.
- **`handleSelectScorecardTemplate`**: Event handler triggered to execute the SelectScorecardTemplate related UI/state action.
- **`isLinkedScorecard`**: Utility function to process 'isLinkedScorecard' logic within the component context.
- **`validateScorecardCriteria`**: Utility function to process 'validateScorecardCriteria' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`Add a scorecard (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/ScorecardPickerDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`getStatusPills`**: Retrieves/fetches data from the state or API regarding atusPills.
- **`renderTabs`**: Helper function to render the specific Tabs UI section.
- **`renderTemplates`**: Helper function to render the specific Templates UI section.
- **`renderYourScorecards`**: Helper function to render the specific YourScorecards UI section.

**Interactive Elements (Buttons / Actions):**
- **`setActiveTab('yours')} > Your Scorecards (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setActiveTab('templates')} > Templates (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/ScorecardView.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`toggleTextExpansion`**: Utility function to process 'toggleTextExpansion' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`{isTextExpanded ? ( <> View less ) : ( <> View more )} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/SettingsDialog.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`SettingsDialog`**: Main functional React component responsible for rendering and composing the SettingsDialog views and logic.
- **`formatDate`**: Utility function to process 'formatDate' logic within the component context.
- **`getFrequencyText`**: Retrieves/fetches data from the state or API regarding equencyText.

**Interactive Elements (Buttons / Actions):**
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onCopyCohortInviteLink(cohortId, courseName)} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white cursor-pointer fle...`**: Triggers component state transitions or API events associated with the action handler.
- **`window.open(`/school/admin/${schoolId}/${courseId ? 'courses' : 'cohorts'}/${courseId || cohortId}`, '_blank')} className="text-gray-600 dark:text-...`**: Triggers component state transitions or API events associated with the action handler.

### `components/SimpleTooltip.tsx`

**Purpose:** A functional block handling SimpleTooltip logic and presentation.

### `components/SuccessSound.tsx`

**Purpose:** A functional block handling SuccessSound logic and presentation.

**Functions / Logic:**
- **`SuccessSound`**: Main functional React component responsible for rendering and composing the SuccessSound views and logic.
- **`createSuccessSound`**: Utility function to process 'createSuccessSound' logic within the component context.

### `components/TaskTypeMetricCard.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`TaskTypeMetricCard`**: Main functional React component responsible for rendering and composing the TaskTypeMetricCard views and logic.

### `components/Toast.tsx`

**Purpose:** A functional block handling Toast logic and presentation.

**Interactive Elements (Buttons / Actions):**
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/Tooltip.tsx`

**Purpose:** A functional block handling Tooltip logic and presentation.

**Functions / Logic:**
- **`Tooltip`**: Main functional React component responsible for rendering and composing the Tooltip views and logic.
- **`clearTimeouts`**: Utility function to process 'clearTimeouts' logic within the component context.
- **`hideTip`**: Utility function to process 'hideTip' logic within the component context.
- **`showTip`**: Utility function to process 'showTip' logic within the component context.

### `components/TopPerformers.tsx`

**Purpose:** A functional block handling TopPerformers logic and presentation.

**Functions / Logic:**
- **`TopPerformers`**: Main functional React component responsible for rendering and composing the TopPerformers views and logic.
- **`getPositionBadge`**: Retrieves/fetches data from the state or API regarding sitionBadge.
- **`handleRefresh`**: Event handler triggered to execute the Refresh related UI/state action.
- **`navigateToLeaderboard`**: Utility function to process 'navigateToLeaderboard' logic within the component context.
- **`renderTooltipPortal`**: Helper function to render the specific TooltipPortal UI section.

**Interactive Elements (Buttons / Actions):**
- **`See All (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)} onFocus={() => setShowTooltip(true)} onBlur={() => setShowTooltip(false)} classNam...`**: Triggers component state transitions or API events associated with the action handler.

### `components/UnauthorizedError.tsx`

**Purpose:** A functional block handling UnauthorizedError logic and presentation.

**Functions / Logic:**
- **`UnauthorizedError`**: Main functional React component responsible for rendering and composing the UnauthorizedError views and logic.

**Interactive Elements (Buttons / Actions):**
- **`router.push('/')} className="px-6 py-3 bg-white text-black text-sm font-medium rounded-full hover:opacity-90 transition-opacity inline-block cursor...`**: Triggers component state transitions or API events associated with the action handler.

### `components/UploadFile.tsx`

**Purpose:** A functional block handling UploadFile logic and presentation.

**Functions / Logic:**
- **`UploadFile`**: Main functional React component responsible for rendering and composing the UploadFile views and logic.
- **`formatAcceptAttribute`**: Utility function to process 'formatAcceptAttribute' logic within the component context.
- **`formatFileTypes`**: Utility function to process 'formatFileTypes' logic within the component context.
- **`isValidFileType`**: Utility function to process 'isValidFileType' logic within the component context.
- **`maybeSelectFile`**: Utility function to process 'maybeSelectFile' logic within the component context.
- **`onDragLeave`**: Utility function to process 'onDragLeave' logic within the component context.
- **`onDragOver`**: Utility function to process 'onDragOver' logic within the component context.
- **`onDrop`**: Utility function to process 'onDrop' logic within the component context.
- **`onFileChange`**: Utility function to process 'onFileChange' logic within the component context.
- **`onKeyDown`**: Utility function to process 'onKeyDown' logic within the component context.
- **`openPicker`**: Utility function to process 'openPicker' logic within the component context.
- **`simulateUpload`**: Utility function to process 'simulateUpload' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`{ e.stopPropagation(); simulateUpload(); }} type="button" disabled={!selectedFile || isUploading || disabled} > Upload (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ e.stopPropagation(); openPicker(); }} type="button" disabled={isUploading || disabled} > Choose file (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `components/dropdownOptions.ts`

**Purpose:** A functional block handling dropdownOptions logic and presentation.

### `components/layout/header.tsx`

**Purpose:** A functional block handling header logic and presentation.

**Functions / Logic:**
- **`Header`**: Main functional React component responsible for rendering and composing the Header views and logic.
- **`getButtonText`**: Retrieves/fetches data from the state or API regarding ttonText.
- **`getInitials`**: Retrieves/fetches data from the state or API regarding itials.
- **`handleButtonClick`**: Event handler triggered to execute the ButtonClick related UI/state action.
- **`handleClickOutside`**: Event handler triggered to execute the ClickOutside related UI/state action.
- **`handleCourseCreationSuccess`**: Event handler triggered to execute the CourseCreationSuccess related UI/state action.
- **`handleCreateCourseButtonClick`**: Event handler triggered to execute the CreateCourseButtonClick related UI/state action.
- **`handleCreateSchool`**: Event handler triggered to execute the CreateSchool related UI/state action.
- **`handleGoToSchoolClick`**: Event handler triggered to execute the GoToSchoolClick related UI/state action.
- **`handleLogout`**: Event handler triggered to execute the Logout related UI/state action.
- **`handleSelectSchool`**: Event handler triggered to execute the SelectSchool related UI/state action.
- **`handleTryDemoClick`**: Event handler triggered to execute the TryDemoClick related UI/state action.
- **`toggleMobileActions`**: Utility function to process 'toggleMobileActions' logic within the component context.
- **`toggleProfileMenu`**: Utility function to process 'toggleProfileMenu' logic within the component context.

**Major Sections:**
- **Header: w-full px-3 py-4 bg-white dark:bg-black text-black dark:text-white**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`{getButtonText()} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setThemePreference('device')} className={`flex-1 px-3 py-1 text-xs rounded-full transition-colors cursor-pointer ${ themePreference === 'device' ? ...`**: Triggers component state transitions or API events associated with the action handler.
- **`Logout (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`[Icon/Child Component] (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{getInitials()} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Try a demo (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setThemePreference('dark')} className={`flex-1 px-3 py-1 text-xs rounded-full transition-colors cursor-pointer ${ themePreference === 'dark' ? 'bg-...`**: Triggers component state transitions or API events associated with the action handler.
- **`{mobileActionsOpen ? : hasOwnedSchool ? ( ) : ( ) } (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`setThemePreference('light')} className={`flex-1 px-3 py-1 text-xs rounded-full transition-colors cursor-pointer ${ themePreference === 'light' ? 'b...`**: Triggers component state transitions or API events associated with the action handler.

### `components/ui/avatar.tsx`

**Purpose:** A functional block handling avatar logic and presentation.

### `components/ui/button.tsx`

**Purpose:** A functional block handling button logic and presentation.

### `components/ui/card.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

### `components/ui/tabs.tsx`

**Purpose:** A functional block handling tabs logic and presentation.

## ⚙️ Backend Endpoints

### `api/bq/base.py`

**Purpose:** A functional block handling base logic and presentation.

**Functions / Logic:**
- **`get_bq_client`**: Retrieves/fetches data from the state or API regarding q_client.

### `api/bq/cron.py`

**Purpose:** A functional block handling cron logic and presentation.

**Functions / Logic:**
- **`_delete_all_from_bq_table`**: Utility function to process '_delete_all_from_bq_table' logic within the component context.
- **`_fetch_assignments_from_sqlite`**: Utility function to process '_fetch_assignments_from_sqlite' logic within the component context.
- **`_fetch_chat_history_from_sqlite`**: Utility function to process '_fetch_chat_history_from_sqlite' logic within the component context.
- **`_fetch_cohorts_from_sqlite`**: Utility function to process '_fetch_cohorts_from_sqlite' logic within the component context.
- **`_fetch_course_milestones_from_sqlite`**: Utility function to process '_fetch_course_milestones_from_sqlite' logic within the component context.
- **`_fetch_course_tasks_from_sqlite`**: Utility function to process '_fetch_course_tasks_from_sqlite' logic within the component context.
- **`_fetch_courses_from_sqlite`**: Utility function to process '_fetch_courses_from_sqlite' logic within the component context.
- **`_fetch_milestones_from_sqlite`**: Utility function to process '_fetch_milestones_from_sqlite' logic within the component context.
- **`_fetch_org_api_keys_from_sqlite`**: Utility function to process '_fetch_org_api_keys_from_sqlite' logic within the component context.
- **`_fetch_organizations_from_sqlite`**: Utility function to process '_fetch_organizations_from_sqlite' logic within the component context.
- **`_fetch_question_scorecards_from_sqlite`**: Utility function to process '_fetch_question_scorecards_from_sqlite' logic within the component context.
- **`_fetch_questions_from_sqlite`**: Utility function to process '_fetch_questions_from_sqlite' logic within the component context.
- **`_fetch_scorecards_from_sqlite`**: Utility function to process '_fetch_scorecards_from_sqlite' logic within the component context.
- **`_fetch_task_completions_from_sqlite`**: Utility function to process '_fetch_task_completions_from_sqlite' logic within the component context.
- **`_fetch_tasks_from_sqlite`**: Utility function to process '_fetch_tasks_from_sqlite' logic within the component context.
- **`_fetch_user_cohorts_from_sqlite`**: Utility function to process '_fetch_user_cohorts_from_sqlite' logic within the component context.
- **`_fetch_users_from_sqlite`**: Utility function to process '_fetch_users_from_sqlite' logic within the component context.
- **`_insert_data_to_bq_table`**: Utility function to process '_insert_data_to_bq_table' logic within the component context.
- **`run_all_syncs`**: Utility function to process 'run_all_syncs' logic within the component context.
- **`sync_assignments_to_bigquery`**: Utility function to process 'sync_assignments_to_bigquery' logic within the component context.
- **`sync_chat_history_to_bigquery`**: Utility function to process 'sync_chat_history_to_bigquery' logic within the component context.
- **`sync_cohorts_to_bigquery`**: Utility function to process 'sync_cohorts_to_bigquery' logic within the component context.
- **`sync_course_milestones_to_bigquery`**: Utility function to process 'sync_course_milestones_to_bigquery' logic within the component context.
- **`sync_course_tasks_to_bigquery`**: Utility function to process 'sync_course_tasks_to_bigquery' logic within the component context.
- **`sync_courses_to_bigquery`**: Utility function to process 'sync_courses_to_bigquery' logic within the component context.
- **`sync_milestones_to_bigquery`**: Utility function to process 'sync_milestones_to_bigquery' logic within the component context.
- **`sync_org_api_keys_to_bigquery`**: Utility function to process 'sync_org_api_keys_to_bigquery' logic within the component context.
- **`sync_organizations_to_bigquery`**: Utility function to process 'sync_organizations_to_bigquery' logic within the component context.
- **`sync_question_scorecards_to_bigquery`**: Utility function to process 'sync_question_scorecards_to_bigquery' logic within the component context.
- **`sync_questions_to_bigquery`**: Utility function to process 'sync_questions_to_bigquery' logic within the component context.
- **`sync_scorecards_to_bigquery`**: Utility function to process 'sync_scorecards_to_bigquery' logic within the component context.
- **`sync_task_completions_to_bigquery`**: Utility function to process 'sync_task_completions_to_bigquery' logic within the component context.
- **`sync_tasks_to_bigquery`**: Utility function to process 'sync_tasks_to_bigquery' logic within the component context.
- **`sync_user_cohorts_to_bigquery`**: Utility function to process 'sync_user_cohorts_to_bigquery' logic within the component context.
- **`sync_users_to_bigquery`**: Utility function to process 'sync_users_to_bigquery' logic within the component context.

### `api/config.py`

**Purpose:** A functional block handling config logic and presentation.

### `api/db/analytics.py`

**Purpose:** A functional block handling analytics logic and presentation.

**Functions / Logic:**
- **`get_cohort_completion`**: Retrieves/fetches data from the state or API regarding ohort_completion.
- **`get_cohort_course_attempt_data`**: Retrieves/fetches data from the state or API regarding ohort_course_attempt_data.
- **`get_cohort_streaks`**: Retrieves/fetches data from the state or API regarding ohort_streaks.
- **`get_usage_summary_by_organization`**: Retrieves/fetches data from the state or API regarding sage_summary_by_organization.

### `api/db/code_draft.py`

**Purpose:** A functional block handling code_draft logic and presentation.

**Functions / Logic:**
- **`delete_user_code_draft`**: Utility function to process 'delete_user_code_draft' logic within the component context.
- **`get_user_code_draft`**: Retrieves/fetches data from the state or API regarding ser_code_draft.
- **`upsert_user_code_draft`**: Utility function to process 'upsert_user_code_draft' logic within the component context.

### `api/db/migration.py`

**Purpose:** A functional block handling migration logic and presentation.

**Functions / Logic:**
- **`add_missing_timestamp_columns`**: Utility function to process 'add_missing_timestamp_columns' logic within the component context.
- **`cleanup_invalid_chat_history`**: Utility function to process 'cleanup_invalid_chat_history' logic within the component context.
- **`create_bq_sync_table_migration`**: Utility function to process 'create_bq_sync_table_migration' logic within the component context.
- **`run_migrations`**: Utility function to process 'run_migrations' logic within the component context.

### `api/db/utils.py`

**Purpose:** A functional block handling utils logic and presentation.

**Functions / Logic:**
- **`_extract_text_from_rich_text`**: Utility function to process '_extract_text_from_rich_text' logic within the component context.
- **`_format_block_content`**: Utility function to process '_format_block_content' logic within the component context.
- **`construct_description_from_blocks`**: Utility function to process 'construct_description_from_blocks' logic within the component context.
- **`convert_blocks_to_right_format`**: Utility function to process 'convert_blocks_to_right_format' logic within the component context.
- **`default`**: Utility function to process 'default' logic within the component context.
- **`extract_text_from_notion_blocks`**: Utility function to process 'extract_text_from_notion_blocks' logic within the component context.
- **`get_org_id_for_course`**: Retrieves/fetches data from the state or API regarding rg_id_for_course.
- **`process_children`**: Utility function to process 'process_children' logic within the component context.

### `api/llm.py`

**Purpose:** A functional block handling llm logic and presentation.

**Functions / Logic:**
- **`create_partial_model`**: Utility function to process 'create_partial_model' logic within the component context.
- **`is_reasoning_model`**: Utility function to process 'is_reasoning_model' logic within the component context.
- **`run_llm_with_openai`**: Utility function to process 'run_llm_with_openai' logic within the component context.
- **`stream_llm_with_instructor`**: Utility function to process 'stream_llm_with_instructor' logic within the component context.
- **`stream_llm_with_openai`**: Utility function to process 'stream_llm_with_openai' logic within the component context.

### `api/main.py`

**Purpose:** A functional block handling main logic and presentation.

**Functions / Logic:**
- **`global_exception_handler`**: Utility function to process 'global_exception_handler' logic within the component context.
- **`health_check`**: Utility function to process 'health_check' logic within the component context.
- **`http_exception_handler`**: Utility function to process 'http_exception_handler' logic within the component context.
- **`lifespan`**: Utility function to process 'lifespan' logic within the component context.
- **`log_requests`**: Utility function to process 'log_requests' logic within the component context.
- **`sentry_debug`**: Utility function to process 'sentry_debug' logic within the component context.
- **`validation_exception_handler`**: Utility function to process 'validation_exception_handler' logic within the component context.

### `api/models.py`

**Purpose:** A functional block handling models logic and presentation.

**Functions / Logic:**
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__eq__`**: Utility function to process '__eq__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.
- **`__str__`**: Utility function to process '__str__' logic within the component context.

### `api/prompts/assignment.py`

**Purpose:** A functional block handling assignment logic and presentation.

### `api/prompts/doubt_solving.py`

**Purpose:** A functional block handling doubt_solving logic and presentation.

### `api/prompts/objective_question.py`

**Purpose:** A functional block handling objective_question logic and presentation.

### `api/prompts/rewrite_query.py`

**Purpose:** A functional block handling rewrite_query logic and presentation.

### `api/prompts/router.py`

**Purpose:** A functional block handling router logic and presentation.

### `api/prompts/subjective_question.py`

**Purpose:** A functional block handling subjective_question logic and presentation.

### `api/public.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`generate_chat_history_stream`**: Utility function to process 'generate_chat_history_stream' logic within the component context.
- **`get_all_chat_history`**: Retrieves/fetches data from the state or API regarding ll_chat_history.
- **`get_tasks_for_course`**: Retrieves/fetches data from the state or API regarding asks_for_course.
- **`validate_api_key`**: Utility function to process 'validate_api_key' logic within the component context.

**API Routes:**
- **`app.get /chat_history`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/ai.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`ai_response_for_assignment`**: Utility function to process 'ai_response_for_assignment' logic within the component context.
- **`ai_response_for_question`**: Utility function to process 'ai_response_for_question' logic within the component context.
- **`build_evaluation_context`**: Utility function to process 'build_evaluation_context' logic within the component context.
- **`build_knowledge_base_from_context`**: Utility function to process 'build_knowledge_base_from_context' logic within the component context.
- **`convert_chat_history_to_prompt`**: Utility function to process 'convert_chat_history_to_prompt' logic within the component context.
- **`convert_scorecard_to_prompt`**: Utility function to process 'convert_scorecard_to_prompt' logic within the component context.
- **`format_ai_scorecard_report`**: Utility function to process 'format_ai_scorecard_report' logic within the component context.
- **`format_chat_history_with_audio`**: Utility function to process 'format_chat_history_with_audio' logic within the component context.
- **`get_ai_message_for_chat_history`**: Retrieves/fetches data from the state or API regarding i_message_for_chat_history.
- **`get_latest_file_uuid_from_chat_history`**: Retrieves/fetches data from the state or API regarding atest_file_uuid_from_chat_history.
- **`get_model_for_task`**: Retrieves/fetches data from the state or API regarding odel_for_task.
- **`get_user_audio_message_for_chat_history`**: Retrieves/fetches data from the state or API regarding ser_audio_message_for_chat_history.
- **`get_user_details_for_prompt`**: Retrieves/fetches data from the state or API regarding ser_details_for_prompt.
- **`make_scorecard_model`**: Utility function to process 'make_scorecard_model' logic within the component context.
- **`rewrite_query`**: Utility function to process 'rewrite_query' logic within the component context.
- **`single_newline_to_double`**: Utility function to process 'single_newline_to_double' logic within the component context.
- **`stream_response`**: Utility function to process 'stream_response' logic within the component context.
- **`stream_response`**: Utility function to process 'stream_response' logic within the component context.

**API Routes:**
- **`router.post /chat`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /assignment`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/auth.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`login_or_signup_user`**: Utility function to process 'login_or_signup_user' logic within the component context.

**API Routes:**
- **`router.post /login`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/batch.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`create_batch`**: Utility function to process 'create_batch' logic within the component context.
- **`delete_batch`**: Utility function to process 'delete_batch' logic within the component context.
- **`get_all_batches_for_cohort`**: Retrieves/fetches data from the state or API regarding ll_batches_for_cohort.
- **`get_batch_by_id`**: Retrieves/fetches data from the state or API regarding atch_by_id.
- **`get_batches_for_user_in_cohort`**: Retrieves/fetches data from the state or API regarding atches_for_user_in_cohort.
- **`update_batch`**: Updates or mutates the internal state for update_batch.

**API Routes:**
- **`router.get /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{batch_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{batch_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{batch_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /user/{user_id}/cohort/{cohort_id}`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/chat.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`delete_all_chat_history`**: Utility function to process 'delete_all_chat_history' logic within the component context.
- **`get_all_chat_history`**: Retrieves/fetches data from the state or API regarding ll_chat_history.
- **`get_user_chat_history_for_task`**: Retrieves/fetches data from the state or API regarding ser_chat_history_for_task.
- **`store_messages`**: Utility function to process 'store_messages' logic within the component context.

**API Routes:**
- **`router.post /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /user/{user_id}/task/{task_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/code.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`delete_code_draft`**: Utility function to process 'delete_code_draft' logic within the component context.
- **`get_code_draft`**: Retrieves/fetches data from the state or API regarding ode_draft.
- **`save_code_draft`**: Utility function to process 'save_code_draft' logic within the component context.

**API Routes:**
- **`router.post /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /user/{user_id}/question/{question_id}`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/cohort.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`add_courses_to_cohort`**: Utility function to process 'add_courses_to_cohort' logic within the component context.
- **`add_members_to_cohort`**: Utility function to process 'add_members_to_cohort' logic within the component context.
- **`create_cohort`**: Utility function to process 'create_cohort' logic within the component context.
- **`delete_cohort`**: Utility function to process 'delete_cohort' logic within the component context.
- **`get_all_cohorts_for_org`**: Retrieves/fetches data from the state or API regarding ll_cohorts_for_org.
- **`get_all_streaks_for_cohort`**: Retrieves/fetches data from the state or API regarding ll_streaks_for_cohort.
- **`get_cohort_analytics_metrics_for_tasks`**: Retrieves/fetches data from the state or API regarding ohort_analytics_metrics_for_tasks.
- **`get_cohort_attempt_data_for_tasks`**: Retrieves/fetches data from the state or API regarding ohort_attempt_data_for_tasks.
- **`get_cohort_by_id`**: Retrieves/fetches data from the state or API regarding ohort_by_id.
- **`get_cohort_completion`**: Retrieves/fetches data from the state or API regarding ohort_completion.
- **`get_cohort_metrics_for_course`**: Retrieves/fetches data from the state or API regarding ohort_metrics_for_course.
- **`get_courses_for_cohort`**: Retrieves/fetches data from the state or API regarding ourses_for_cohort.
- **`get_leaderboard_data`**: Retrieves/fetches data from the state or API regarding eaderboard_data.
- **`remove_courses_from_cohort`**: Utility function to process 'remove_courses_from_cohort' logic within the component context.
- **`remove_members_from_cohort`**: Utility function to process 'remove_members_from_cohort' logic within the component context.
- **`update_cohort_name`**: Updates or mutates the internal state for update_cohort_name.

**API Routes:**
- **`router.get /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{cohort_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{cohort_id}/members`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{cohort_id}/members`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{cohort_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{cohort_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{cohort_id}/courses`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{cohort_id}/courses`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{cohort_id}/leaderboard`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{cohort_id}/courses/{course_id}/metrics`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{cohort_id}/streaks`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{cohort_id}/task_metrics`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{cohort_id}/task_attempt_data`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/course.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`add_course_to_cohorts`**: Utility function to process 'add_course_to_cohorts' logic within the component context.
- **`add_milestone_to_course`**: Utility function to process 'add_milestone_to_course' logic within the component context.
- **`add_tasks_to_courses`**: Utility function to process 'add_tasks_to_courses' logic within the component context.
- **`create_course`**: Utility function to process 'create_course' logic within the component context.
- **`delete_course`**: Utility function to process 'delete_course' logic within the component context.
- **`duplicate_course`**: Utility function to process 'duplicate_course' logic within the component context.
- **`get_all_courses_for_org`**: Retrieves/fetches data from the state or API regarding ll_courses_for_org.
- **`get_cohorts_for_course`**: Retrieves/fetches data from the state or API regarding ohorts_for_course.
- **`get_course`**: Retrieves/fetches data from the state or API regarding ourse.
- **`get_tasks_for_course`**: Retrieves/fetches data from the state or API regarding asks_for_course.
- **`remove_course_from_cohorts`**: Utility function to process 'remove_course_from_cohorts' logic within the component context.
- **`remove_tasks_from_courses`**: Utility function to process 'remove_tasks_from_courses' logic within the component context.
- **`swap_milestone_ordering`**: Utility function to process 'swap_milestone_ordering' logic within the component context.
- **`swap_task_ordering`**: Utility function to process 'swap_task_ordering' logic within the component context.
- **`update_course_name`**: Updates or mutates the internal state for update_course_name.
- **`update_milestone_orders`**: Updates or mutates the internal state for update_milestone_orders.
- **`update_task_orders`**: Updates or mutates the internal state for update_task_orders.

**API Routes:**
- **`router.post /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{course_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /tasks`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /tasks`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /tasks/order`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{course_id}/milestones`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /milestones/order`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{course_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{course_id}/cohorts`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{course_id}/cohorts`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{course_id}/cohorts`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{course_id}/tasks`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{course_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{course_id}/milestones/swap`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{course_id}/tasks/swap`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{course_id}/duplicate`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/file.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`download_file_locally`**: Utility function to process 'download_file_locally' logic within the component context.
- **`get_download_presigned_url`**: Retrieves/fetches data from the state or API regarding ownload_presigned_url.
- **`get_upload_presigned_url`**: Retrieves/fetches data from the state or API regarding pload_presigned_url.
- **`upload_file_locally`**: Utility function to process 'upload_file_locally' logic within the component context.

**API Routes:**
- **`router.put /presigned-url/create`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /presigned-url/get`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /upload-local`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /download-local/`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/hva.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`get_hva_org_id`**: Retrieves/fetches data from the state or API regarding va_org_id.
- **`is_user_hva_learner`**: Utility function to process 'is_user_hva_learner' logic within the component context.

**API Routes:**
- **`router.get /is_user_hva_learner`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /org_id`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/integration.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`create_integration_api`**: Utility function to process 'create_integration_api' logic within the component context.
- **`delete_integration_api`**: Utility function to process 'delete_integration_api' logic within the component context.
- **`get_integration_api`**: Retrieves/fetches data from the state or API regarding ntegration_api.
- **`list_integrations_api`**: Utility function to process 'list_integrations_api' logic within the component context.
- **`update_integration_api`**: Updates or mutates the internal state for update_integration_api.

**API Routes:**
- **`router.post /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{integration_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{integration_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{integration_id}`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/milestone.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`delete_milestone`**: Utility function to process 'delete_milestone' logic within the component context.
- **`get_all_milestones_for_org`**: Retrieves/fetches data from the state or API regarding ll_milestones_for_org.
- **`get_milestones_for_course`**: Retrieves/fetches data from the state or API regarding ilestones_for_course.
- **`get_user_metrics_for_all_milestones`**: Retrieves/fetches data from the state or API regarding ser_metrics_for_all_milestones.
- **`update_milestone`**: Updates or mutates the internal state for update_milestone.

**API Routes:**
- **`router.get /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{milestone_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{milestone_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /metrics/user/{user_id}/course/{course_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /course/{course_id}`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/org.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`add_users_to_org_by_email`**: Utility function to process 'add_users_to_org_by_email' logic within the component context.
- **`create_organization`**: Utility function to process 'create_organization' logic within the component context.
- **`get_all_orgs`**: Retrieves/fetches data from the state or API regarding ll_orgs.
- **`get_org_by_id`**: Retrieves/fetches data from the state or API regarding rg_by_id.
- **`get_org_by_slug`**: Retrieves/fetches data from the state or API regarding rg_by_slug.
- **`get_org_members`**: Retrieves/fetches data from the state or API regarding rg_members.
- **`remove_members_from_org`**: Utility function to process 'remove_members_from_org' logic within the component context.
- **`update_org`**: Updates or mutates the internal state for update_org.

**API Routes:**
- **`router.post /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{org_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /slug/{slug}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{org_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{org_id}/members`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{org_id}/members`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{org_id}/members`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/scorecard.py`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`create_scorecard`**: Utility function to process 'create_scorecard' logic within the component context.
- **`get_all_scorecards_for_org`**: Retrieves/fetches data from the state or API regarding ll_scorecards_for_org.
- **`update_scorecard`**: Updates or mutates the internal state for update_scorecard.

**API Routes:**
- **`router.get /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{scorecard_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/task.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`create_assignment`**: Utility function to process 'create_assignment' logic within the component context.
- **`create_draft_task_for_course`**: Utility function to process 'create_draft_task_for_course' logic within the component context.
- **`delete_task`**: Utility function to process 'delete_task' logic within the component context.
- **`delete_tasks`**: Utility function to process 'delete_tasks' logic within the component context.
- **`duplicate_task`**: Utility function to process 'duplicate_task' logic within the component context.
- **`get_learning_material_tasks_for_course`**: Retrieves/fetches data from the state or API regarding earning_material_tasks_for_course.
- **`get_task`**: Retrieves/fetches data from the state or API regarding ask.
- **`get_tasks_completed_for_user`**: Retrieves/fetches data from the state or API regarding asks_completed_for_user.
- **`mark_task_completed`**: Utility function to process 'mark_task_completed' logic within the component context.
- **`publish_learning_material_task`**: Utility function to process 'publish_learning_material_task' logic within the component context.
- **`update_assignment`**: Updates or mutates the internal state for update_assignment.
- **`update_draft_quiz`**: Updates or mutates the internal state for update_draft_quiz.
- **`update_learning_material_task`**: Updates or mutates the internal state for update_learning_material_task.
- **`update_published_quiz`**: Updates or mutates the internal state for update_published_quiz.

**API Routes:**
- **`router.get /course/{course_id}/learning_material`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{task_id}/learning_material`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{task_id}/learning_material`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{task_id}/quiz`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{task_id}/quiz`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /duplicate`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /{task_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.delete /`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /cohort/{cohort_id}/user/{user_id}/completed`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{task_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{task_id}/complete`**: Backend endpoint configured to process this specific HTTP request.
- **`router.post /{task_id}/assignment`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{task_id}/assignment`**: Backend endpoint configured to process this specific HTTP request.

### `api/routes/user.py`

**Purpose:** FastAPI router defining endpoints to manipulate database resources or return data to the frontend.

**Functions / Logic:**
- **`get_user_active_days`**: Retrieves/fetches data from the state or API regarding ser_active_days.
- **`get_user_activity_for_year`**: Retrieves/fetches data from the state or API regarding ser_activity_for_year.
- **`get_user_by_id`**: Retrieves/fetches data from the state or API regarding ser_by_id.
- **`get_user_cohorts`**: Retrieves/fetches data from the state or API regarding ser_cohorts.
- **`get_user_courses`**: Retrieves/fetches data from the state or API regarding ser_courses.
- **`get_user_org_cohorts`**: Retrieves/fetches data from the state or API regarding ser_org_cohorts.
- **`get_user_orgs`**: Retrieves/fetches data from the state or API regarding ser_orgs.
- **`get_user_streak`**: Retrieves/fetches data from the state or API regarding ser_streak.
- **`is_user_present_in_cohort`**: Utility function to process 'is_user_present_in_cohort' logic within the component context.
- **`update_user`**: Updates or mutates the internal state for update_user.

**API Routes:**
- **`router.get /{user_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.put /{user_id}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{user_id}/cohorts`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{user_id}/activity/{year}`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{user_id}/active_days`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{user_id}/streak`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{user_id}/cohort/{cohort_id}/present`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{user_id}/courses`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{user_id}/org/{org_id}/cohorts`**: Backend endpoint configured to process this specific HTTP request.
- **`router.get /{user_id}/orgs`**: Backend endpoint configured to process this specific HTTP request.

### `api/scheduler.py`

**Purpose:** A functional block handling scheduler logic and presentation.

**Functions / Logic:**
- **`check_memory`**: Utility function to process 'check_memory' logic within the component context.
- **`check_scheduled_tasks`**: Utility function to process 'check_scheduled_tasks' logic within the component context.
- **`decorator`**: Utility function to process 'decorator' logic within the component context.
- **`with_error_reporting`**: Utility function to process 'with_error_reporting' logic within the component context.
- **`wrapper`**: Utility function to process 'wrapper' logic within the component context.

### `api/settings.py`

**Purpose:** A functional block handling settings logic and presentation.

**Functions / Logic:**
- **`get_settings`**: Retrieves/fetches data from the state or API regarding ettings.

### `api/slack.py`

**Purpose:** A functional block handling slack logic and presentation.

**Functions / Logic:**
- **`format_period_stats`**: Utility function to process 'format_period_stats' logic within the component context.
- **`send_slack_notification`**: Utility function to process 'send_slack_notification' logic within the component context.
- **`send_slack_notification_for_alerts`**: Utility function to process 'send_slack_notification_for_alerts' logic within the component context.
- **`send_slack_notification_for_member_added_to_cohort`**: Utility function to process 'send_slack_notification_for_member_added_to_cohort' logic within the component context.
- **`send_slack_notification_for_member_added_to_org`**: Utility function to process 'send_slack_notification_for_member_added_to_org' logic within the component context.
- **`send_slack_notification_for_new_course`**: Utility function to process 'send_slack_notification_for_new_course' logic within the component context.
- **`send_slack_notification_for_new_org`**: Utility function to process 'send_slack_notification_for_new_org' logic within the component context.
- **`send_slack_notification_for_new_user`**: Utility function to process 'send_slack_notification_for_new_user' logic within the component context.
- **`send_slack_notification_for_usage_stats`**: Utility function to process 'send_slack_notification_for_usage_stats' logic within the component context.

### `api/utils/__init__.py`

**Purpose:** A functional block handling __init__ logic and presentation.

**Functions / Logic:**
- **`convert_utc_to_ist`**: Utility function to process 'convert_utc_to_ist' logic within the component context.
- **`generate_random_color`**: Utility function to process 'generate_random_color' logic within the component context.
- **`get_date_from_str`**: Retrieves/fetches data from the state or API regarding ate_from_str.

### `api/utils/audio.py`

**Purpose:** A functional block handling audio logic and presentation.

**Functions / Logic:**
- **`prepare_audio_input_for_ai`**: Utility function to process 'prepare_audio_input_for_ai' logic within the component context.

### `api/utils/concurrency.py`

**Purpose:** A functional block handling concurrency logic and presentation.

**Functions / Logic:**
- **`async_batch_gather`**: Utility function to process 'async_batch_gather' logic within the component context.
- **`async_index_wrapper`**: Utility function to process 'async_index_wrapper' logic within the component context.

### `api/utils/db.py`

**Purpose:** A functional block handling db logic and presentation.

**Functions / Logic:**
- **`check_table_exists`**: Utility function to process 'check_table_exists' logic within the component context.
- **`deserialise_list_from_str`**: Utility function to process 'deserialise_list_from_str' logic within the component context.
- **`execute_db_operation`**: Utility function to process 'execute_db_operation' logic within the component context.
- **`execute_many_db_operation`**: Utility function to process 'execute_many_db_operation' logic within the component context.
- **`execute_multiple_db_operations`**: Utility function to process 'execute_multiple_db_operations' logic within the component context.
- **`get_new_db_connection`**: Retrieves/fetches data from the state or API regarding ew_db_connection.
- **`serialise_list_to_str`**: Utility function to process 'serialise_list_to_str' logic within the component context.
- **`set_db_defaults`**: Updates or mutates the internal state for set_db_defaults.
- **`trace_callback`**: Utility function to process 'trace_callback' logic within the component context.

### `api/utils/file_analysis.py`

**Purpose:** A functional block handling file_analysis logic and presentation.

**Functions / Logic:**
- **`extract_submission_file`**: Utility function to process 'extract_submission_file' logic within the component context.
- **`extract_zip_file`**: Utility function to process 'extract_zip_file' logic within the component context.

### `api/utils/logging.py`

**Purpose:** A functional block handling logging logic and presentation.

**Functions / Logic:**
- **`setup_logging`**: Updates or mutates the internal state for setup_logging.

### `api/utils/s3.py`

**Purpose:** A functional block handling s3 logic and presentation.

**Functions / Logic:**
- **`download_file_from_s3_as_bytes`**: Utility function to process 'download_file_from_s3_as_bytes' logic within the component context.
- **`generate_s3_uuid`**: Utility function to process 'generate_s3_uuid' logic within the component context.
- **`get_media_upload_s3_dir`**: Retrieves/fetches data from the state or API regarding edia_upload_s3_dir.
- **`get_media_upload_s3_key_from_uuid`**: Retrieves/fetches data from the state or API regarding edia_upload_s3_key_from_uuid.
- **`upload_audio_data_to_s3`**: Utility function to process 'upload_audio_data_to_s3' logic within the component context.
- **`upload_file_to_s3`**: Utility function to process 'upload_file_to_s3' logic within the component context.

### `api/websockets.py`

**Purpose:** A functional block handling websockets logic and presentation.

**Functions / Logic:**
- **`__init__`**: Utility function to process '__init__' logic within the component context.
- **`connect`**: Utility function to process 'connect' logic within the component context.
- **`disconnect`**: Utility function to process 'disconnect' logic within the component context.
- **`get_manager`**: Retrieves/fetches data from the state or API regarding anager.
- **`send_item_update`**: Utility function to process 'send_item_update' logic within the component context.
- **`websocket_course_generation`**: Utility function to process 'websocket_course_generation' logic within the component context.

## 🛠️ Utilities & Others

### `__tests__/app/layout.test.tsx`

**Purpose:** Provides the structural wrapper and context providers for nested routes.

**Functions / Logic:**
- **`TestWrapper`**: Main functional React component responsible for rendering and composing the TestWrapper views and logic.

### `__tests__/app/school/[id]/ClientSchoolMemberView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockCohortCard`**: Main functional React component responsible for rendering and composing the MockCohortCard views and logic.
- **`MockHeader`**: Main functional React component responsible for rendering and composing the MockHeader views and logic.
- **`MockLearnerCohortView`**: Main functional React component responsible for rendering and composing the MockLearnerCohortView views and logic.
- **`MockMemberSchoolViewHeader`**: Main functional React component responsible for rendering and composing the MockMemberSchoolViewHeader views and logic.
- **`MockMentorCohortView`**: Main functional React component responsible for rendering and composing the MockMentorCohortView views and logic.
- **`MockMobileDropdown`**: Main functional React component responsible for rendering and composing the MockMobileDropdown views and logic.

**Major Sections:**
- **Header: header**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`onCourseSelect(1)} // Same index as current > Select Same Course (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Close (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onSelect(option)} > {option.value.name} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onUpdateTaskAndQuestionIdInUrl('task-789', null)} > Update only taskId (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onUpdateTaskAndQuestionIdInUrl('task-123', 'question-456')} > Update URL with both IDs (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onCourseSelect(1)} > Select Course 1 (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onCohortSelect({ id: 2, name: 'Test Cohort 2' })} > Select Cohort (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onActiveCourseChange(1)} > Change Course (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onUpdateTaskAndQuestionIdInUrl(null, null)} > Clear URL IDs (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onBatchSelect(123)} > Select Batch (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/app/school/[id]/cohort/[cohortId]/leaderboard/ClientLeaderboardView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockHeader`**: Main functional React component responsible for rendering and composing the MockHeader views and logic.
- **`MockImage`**: Main functional React component responsible for rendering and composing the MockImage views and logic.

**Major Sections:**
- **Header: header**: Structural container defining a discrete area of the layout.

### `__tests__/app/school/[id]/courses/[courseId]/learner-view/[learnerId]/ClientLearnerViewWrapper.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

### `__tests__/app/school/[id]/join/page.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockToast`**: Main functional React component responsible for rendering and composing the MockToast views and logic.

**Interactive Elements (Buttons / Actions):**
- **`Close (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/app/school/admin/[id]/ClientSchoolAdminView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockCohortCard`**: Main functional React component responsible for rendering and composing the MockCohortCard views and logic.
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.
- **`MockCourseCard`**: Main functional React component responsible for rendering and composing the MockCourseCard views and logic.
- **`MockCreateCohortDialog`**: Main functional React component responsible for rendering and composing the MockCreateCohortDialog views and logic.
- **`MockCreateCourseDialog`**: Main functional React component responsible for rendering and composing the MockCreateCourseDialog views and logic.
- **`MockHeader`**: Main functional React component responsible for rendering and composing the MockHeader views and logic.
- **`MockInviteMembersDialog`**: Main functional React component responsible for rendering and composing the MockInviteMembersDialog views and logic.
- **`MockToast`**: Main functional React component responsible for rendering and composing the MockToast views and logic.
- **`setupEmptyCoursesTest`**: Updates or mutates the internal state for setupEmptyCoursesTest.
- **`setupSuccessfulFetches`**: Updates or mutates the internal state for setupSuccessfulFetches.

**Major Sections:**
- **Header: header**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`Close (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onSuccess({ id: 'new-course', name: 'New Course' })}> Create (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Confirm (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onDelete(cohort.id)} data-testid={`delete-cohort-${cohort.id}`}> Delete (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onCreateCohort({ id: 'new-cohort', name: 'New Cohort' })}> Create (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onInvite(['test@example.com'])} data-testid="invite-button"> Invite (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onDelete(course.id)} data-testid={`delete-course-${course.id}`}> Delete (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/app/school/admin/[id]/cohorts/[cohortId]/ClientCohortPage.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockCohortCoursesLinkerDropdown`**: Main functional React component responsible for rendering and composing the MockCohortCoursesLinkerDropdown views and logic.
- **`MockCohortDashboard`**: Main functional React component responsible for rendering and composing the MockCohortDashboard views and logic.
- **`MockCohortMemberManagement`**: Main functional React component responsible for rendering and composing the MockCohortMemberManagement views and logic.
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.
- **`MockCoursePublishSuccessBanner`**: Main functional React component responsible for rendering and composing the MockCoursePublishSuccessBanner views and logic.
- **`MockCreateBatchDialog`**: Main functional React component responsible for rendering and composing the MockCreateBatchDialog views and logic.
- **`MockHeader`**: Main functional React component responsible for rendering and composing the MockHeader views and logic.
- **`MockSettingsDialog`**: Main functional React component responsible for rendering and composing the MockSettingsDialog views and logic.
- **`MockToast`**: Main functional React component responsible for rendering and composing the MockToast views and logic.
- **`MockTooltip`**: Main functional React component responsible for rendering and composing the MockTooltip views and logic.
- **`setupFailedCohortFetch`**: Updates or mutates the internal state for setupFailedCohortFetch.
- **`setupFetchesWithBatches`**: Updates or mutates the internal state for setupFetchesWithBatches.
- **`setupFetchesWithoutBatches`**: Updates or mutates the internal state for setupFetchesWithoutBatches.
- **`setupSuccessfulFetches`**: Updates or mutates the internal state for setupSuccessfulFetches.

**Major Sections:**
- **Header: header**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`Close (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Confirm (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onRequestDelete(batch)} data-testid="delete-batch">Delete Batch (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ onShowToast('Success', 'Member invited', '✅'); }} data-testid="test-toast" > Test Toast (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Close Dialog (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ updateCohort(cohort.members); }} data-testid="update-cohort" > Update Cohort (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Add Learners (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Fetch Courses (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ // Simulate linking courses - use course ID 1 to match test expectations const mockSelectedCourses = [{ id: 1, name: 'Test Course' }]; onCoursesL...`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/app/school/admin/[id]/courses/[courseId]/preview/ClientPreviewWrapper.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

### `__tests__/components/AssignmentEditor.test.tsx`

**Purpose:** A functional block handling AssignmentEditor logic and presentation.

**Functions / Logic:**
- **`MockBlockNoteEditor`**: Main functional React component responsible for rendering and composing the MockBlockNoteEditor views and logic.
- **`MockDropdown`**: Main functional React component responsible for rendering and composing the MockDropdown views and logic.
- **`MockKBE`**: Main functional React component responsible for rendering and composing the MockKBE views and logic.
- **`MockNotionIntegration`**: Main functional React component responsible for rendering and composing the MockNotionIntegration views and logic.
- **`MockSCM`**: Main functional React component responsible for rendering and composing the MockSCM views and logic.

**Interactive Elements (Buttons / Actions):**
- **`props.onScorecardChange?.({ id: 'sc1', criteria: [] })}>Pick Scorecard (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onLinkedMaterialsChange?.(['id1'])}>KB Links (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onPageSelect?.('pid', 'ptitle')}>Select Notion Page (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onContentUpdate?.([{ type: 'paragraph', content: [{ type: 'text', text: 'From Notion' }] }])}>Mock Notion (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onPageRemove?.()}>Remove Notion Page (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onKnowledgeBaseChange?.([{ type: 'paragraph', content: [{ type: 'text', text: 'KB' }] }])}>KB Blocks (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onChange?.([])}>Clear Blocks (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/AudioInputComponent.test.tsx`

**Purpose:** A functional block handling AudioInputComponent logic and presentation.

**Functions / Logic:**
- **`createRecordedAudio`**: Utility function to process 'createRecordedAudio' logic within the component context.
- **`setupMocks`**: Updates or mutates the internal state for setupMocks.
- **`setupRecording`**: Updates or mutates the internal state for setupRecording.

### `__tests__/components/BlockNoteEditor.test.tsx`

**Purpose:** A functional block handling BlockNoteEditor logic and presentation.

### `__tests__/components/ChatHistoryView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`add`**: Utility function to process 'add' logic within the component context.
- **`multiply`**: Utility function to process 'multiply' logic within the component context.

### `__tests__/components/ChatPlaceholderView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

### `__tests__/components/ChatView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockAudioInputComponent`**: Main functional React component responsible for rendering and composing the MockAudioInputComponent views and logic.
- **`MockChatHistoryView`**: Main functional React component responsible for rendering and composing the MockChatHistoryView views and logic.
- **`MockChatPlaceholderView`**: Main functional React component responsible for rendering and composing the MockChatPlaceholderView views and logic.
- **`MockUploadFile`**: Main functional React component responsible for rendering and composing the MockUploadFile views and logic.
- **`flushPromises`**: Utility function to process 'flushPromises' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`props.handleCodeSubmit({ javascript: 'console.log("test")' })}> Submit Code (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ const mockFile = new File(['test content'], 'test.txt', { type: 'text/plain' }); props.onComplete && props.onComplete(mockFile); }} disabled={pro...`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onCodeRun('preview content', 'output', '100ms', false)}> Run Code (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onViewScorecard([])}>View Scorecard (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onCodeChange && props.onCodeChange()}> Change Code (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onAudioSubmit(new Blob())}>Submit Audio (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/CodeEditorView.integration.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`App`**: Main functional React component responsible for rendering and composing the App views and logic.

**Interactive Elements (Buttons / Actions):**
- **`onChange?.(undefined)}>U (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/CodeEditorView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockCodeEditorView`**: Main functional React component responsible for rendering and composing the MockCodeEditorView views and logic.
- **`MockToast`**: Main functional React component responsible for rendering and composing the MockToast views and logic.

**Interactive Elements (Buttons / Actions):**
- **`Run (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.handleCodeSubmit()}>Submit (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/CohortCard.test.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.

**Interactive Elements (Buttons / Actions):**
- **`{props.confirmButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/CohortCoursesLinkerDropdown.test.tsx`

**Purpose:** A functional block handling CohortCoursesLinkerDropdown logic and presentation.

**Functions / Logic:**
- **`MockLink`**: Main functional React component responsible for rendering and composing the MockLink views and logic.

### `__tests__/components/CohortDashboard.test.tsx`

**Purpose:** A functional block handling CohortDashboard logic and presentation.

**Functions / Logic:**
- **`MockClientLeaderboardView`**: Main functional React component responsible for rendering and composing the MockClientLeaderboardView views and logic.
- **`MockTaskTypeMetricCard`**: Main functional React component responsible for rendering and composing the MockTaskTypeMetricCard views and logic.

### `__tests__/components/CohortMemberManagement.test.tsx`

**Purpose:** A functional block handling CohortMemberManagement logic and presentation.

**Functions / Logic:**
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.

**Interactive Elements (Buttons / Actions):**
- **`{props.confirmButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/ConfirmationDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

### `__tests__/components/CourseCard.test.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`MockLink`**: Main functional React component responsible for rendering and composing the MockLink views and logic.

### `__tests__/components/CourseCohortSelectionDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`MockCreateCohortDialog`**: Main functional React component responsible for rendering and composing the MockCreateCohortDialog views and logic.
- **`MockLink`**: Main functional React component responsible for rendering and composing the MockLink views and logic.

### `__tests__/components/CourseItemDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`expect`**: Utility function to process 'expect' logic within the component context.
- **`mockCallback`**: Utility function to process 'mockCallback' logic within the component context.
- **`mockConfirmationDialog`**: Utility function to process 'mockConfirmationDialog' logic within the component context.
- **`renderDialog`**: Helper function to render the specific Dialog UI section.

**Interactive Elements (Buttons / Actions):**
- **`{props.confirmButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{props.cancelButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/CourseModuleList.test.tsx`

**Purpose:** A functional block handling CourseModuleList logic and presentation.

**Functions / Logic:**
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.
- **`MockCourseItemDialog`**: Main functional React component responsible for rendering and composing the MockCourseItemDialog views and logic.
- **`MockTooltip`**: Main functional React component responsible for rendering and composing the MockTooltip views and logic.

**Interactive Elements (Buttons / Actions):**
- **`{props.confirmButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/CoursePublishSuccessBanner.test.tsx`

**Purpose:** A functional block handling CoursePublishSuccessBanner logic and presentation.

### `__tests__/components/CreateBatchDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

### `__tests__/components/CreateCohortDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

### `__tests__/components/CreateCourseDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

### `__tests__/components/DescriptionEditModal.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

### `__tests__/components/DripPublishingConfig.test.tsx`

**Purpose:** A functional block handling DripPublishingConfig logic and presentation.

**Functions / Logic:**
- **`MockDatePicker`**: Main functional React component responsible for rendering and composing the MockDatePicker views and logic.
- **`MockToast`**: Main functional React component responsible for rendering and composing the MockToast views and logic.

### `__tests__/components/Dropdown.test.tsx`

**Purpose:** A functional block handling Dropdown logic and presentation.

**Functions / Logic:**
- **`MockedTooltip`**: Main functional React component responsible for rendering and composing the MockedTooltip views and logic.
- **`TestIcon`**: Main functional React component responsible for rendering and composing the TestIcon views and logic.

**Major Sections:**
- **Div: tooltip-wrapper**: Structural container defining a discrete area of the layout.

### `__tests__/components/GenerateWithAIDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

### `__tests__/components/InviteMembersDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

### `__tests__/components/KnowledgeBaseEditor.test.tsx`

**Purpose:** A functional block handling KnowledgeBaseEditor logic and presentation.

### `__tests__/components/LearnerAssignmentView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`encode`**: Utility function to process 'encode' logic within the component context.
- **`makeMockReader`**: Utility function to process 'makeMockReader' logic within the component context.

**Major Sections:**
- **Div: scorecard-view**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`props.handleAudioSubmit?.(new Blob(['audio'], { type: 'audio/webm' }))} data-testid="audio-submit">Audio Submit (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onFileDownload?.('test-uuid', 'test-file.zip')} data-testid="download-file">Download File (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.handleBackToChat?.()}>Back (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onFileUploaded?.(new File([new Uint8Array([1, 2, 3])], 'sample.zip', { type: 'application/zip' }))}>Upload File (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.handleSubmitAnswer?.()}>Submit (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.handleViewScorecard?.([{ category: 'A', score: 3, max_score: 4, pass_score: 3, feedback: {} }])}>Open Scorecard (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/LearnerCohortView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockLearnerCourseView`**: Main functional React component responsible for rendering and composing the MockLearnerCourseView views and logic.
- **`MockLearningStreak`**: Main functional React component responsible for rendering and composing the MockLearningStreak views and logic.
- **`MockMobileDropdown`**: Main functional React component responsible for rendering and composing the MockMobileDropdown views and logic.
- **`MockTopPerformers`**: Main functional React component responsible for rendering and composing the MockTopPerformers views and logic.
- **`MockTopPerformersEmpty`**: Main functional React component responsible for rendering and composing the MockTopPerformersEmpty views and logic.
- **`MockTopPerformersWithCallback`**: Main functional React component responsible for rendering and composing the MockTopPerformersWithCallback views and logic.
- **`localStorageMock`**: Utility function to process 'localStorageMock' logic within the component context.
- **`onEmptyData`**: Utility function to process 'onEmptyData' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`onTaskComplete?.('task-1', true)} > Complete Task (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onDialogClose?.()} > Close Dialog (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onSelect?.(option)} className={selectedId === option.id ? 'selected' : ''} > {option.label} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onQuestionComplete?.('task-1', 'question-1', true)} > Complete Question (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/LearnerCourseView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.
- **`MockCourseModuleList`**: Main functional React component responsible for rendering and composing the MockCourseModuleList views and logic.
- **`MockDynamicComponent`**: Main functional React component responsible for rendering and composing the MockDynamicComponent views and logic.
- **`MockDynamicLearnerQuizView`**: Main functional React component responsible for rendering and composing the MockDynamicLearnerQuizView views and logic.
- **`MockDynamicLearningMaterialViewer`**: Main functional React component responsible for rendering and composing the MockDynamicLearningMaterialViewer views and logic.
- **`MockModuleCompletionSound`**: Main functional React component responsible for rendering and composing the MockModuleCompletionSound views and logic.
- **`MockSuccessSound`**: Main functional React component responsible for rendering and composing the MockSuccessSound views and logic.
- **`mockSuccessfulFetchResponse`**: Utility function to process 'mockSuccessfulFetchResponse' logic within the component context.

**Interactive Elements (Buttons / Actions):**
- **`{props.cancelButtonText || 'Cancel'} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ // Call the onMarkComplete function props.onMarkComplete(); }} > Mark Complete from Viewer (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onQuestionChange && props.onQuestionChange('q2')} > Change Question (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ // Toggle AI responding state const currentState = props.isAiResponding || false; props.onAiRespondingChange && props.onAiRespondingChange(!curre...`**: Triggers component state transitions or API events associated with the action handler.
- **`{props.confirmButtonText || 'Confirm'} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onOpenItem(module.id, item.id)} > Open {item.title} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onAiRespondingChange && props.onAiRespondingChange(false)} > Stop AI Responding (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ // Simulate submitting answers for all questions to complete the quiz console.log('Mock quiz submit clicked, onSubmitAnswer:', typeof props.onSub...`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onToggleModule(module.id)} > Toggle {module.title} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/LearnerQuizView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockBlockNoteEditor`**: Main functional React component responsible for rendering and composing the MockBlockNoteEditor views and logic.
- **`MockChatView`**: Main functional React component responsible for rendering and composing the MockChatView views and logic.
- **`MockChatViewForRetry`**: Main functional React component responsible for rendering and composing the MockChatViewForRetry views and logic.
- **`MockChatViewForScorecard`**: Main functional React component responsible for rendering and composing the MockChatViewForScorecard views and logic.
- **`MockChatViewWithScorecard`**: Main functional React component responsible for rendering and composing the MockChatViewWithScorecard views and logic.
- **`MockCodePreview`**: Main functional React component responsible for rendering and composing the MockCodePreview views and logic.
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.
- **`MockScorecardView`**: Main functional React component responsible for rendering and composing the MockScorecardView views and logic.
- **`MockScorecardViewForBackToChat`**: Main functional React component responsible for rendering and composing the MockScorecardViewForBackToChat views and logic.
- **`TestWrapper`**: Main functional React component responsible for rendering and composing the TestWrapper views and logic.
- **`execution`**: Utility function to process 'execution' logic within the component context.
- **`handleBackToChat`**: Event handler triggered to execute the BackToChat related UI/state action.
- **`handleViewScorecard`**: Event handler triggered to execute the ViewScorecard related UI/state action.
- **`properly`**: Utility function to process 'properly' logic within the component context.

**Major Sections:**
- **Div: scorecard-view**: Structural container defining a discrete area of the layout.
- **Div: scorecard-items**: Structural container defining a discrete area of the layout.
- **Div: layout-grid**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`props.handleAudioSubmit(new Blob())} data-testid="submit-audio">Submit Audio (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.handleSubmitAnswer('text')} data-testid="submit-text">Submit Text (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.handleRetry()} data-testid="retry-button">Retry (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{props.cancelButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Back to Chat (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Clear (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onShowLearnerViewChange?.(!props.showLearnerView)} data-testid="toggle-learner-view">Toggle Learner View (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{ // For mobile view change test - trigger code state with exact conditions if (props.onCodeStateChange && window.innerWidth Toggle Code (Action: N...`**: Triggers component state transitions or API events associated with the action handler.
- **`props.handleViewScorecard?.([ { category: 'Score', feedback: 'Nice', score: 5 } ])} data-testid="view-scorecard" > View Scorecard (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{props.confirmButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/LearnerScorecard.test.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

### `__tests__/components/LearningMaterialEditor.test.tsx`

**Purpose:** A functional block handling LearningMaterialEditor logic and presentation.

**Functions / Logic:**
- **`MockBlockNoteEditor`**: Main functional React component responsible for rendering and composing the MockBlockNoteEditor views and logic.
- **`MockChatView`**: Main functional React component responsible for rendering and composing the MockChatView views and logic.
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.
- **`MockNotionIntegration`**: Main functional React component responsible for rendering and composing the MockNotionIntegration views and logic.
- **`MockPublishConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockPublishConfirmationDialog views and logic.

**Interactive Elements (Buttons / Actions):**
- **`onPageRemove && onPageRemove()} data-testid="trigger-page-remove" > Remove Page (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Confirm (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onConfirm && onConfirm('2024-12-31T10:00:00Z')} data-testid="confirm-publish-scheduled-button" disabled={isLoading} > Confirm Publish Scheduled (Ac...`**: Triggers component state transitions or API events associated with the action handler.
- **`onConfirm && onConfirm(null)} data-testid="confirm-publish-button" disabled={isLoading} > Confirm Publish (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onChange && onChange([{ type: 'paragraph', content: [{ text: 'test content', type: 'text', styles: {} }] }])} data-testid="trigger-change" > Trigge...`**: Triggers component state transitions or API events associated with the action handler.
- **`onPageSelect && onPageSelect('page-123', 'Test Page')} data-testid="trigger-page-select" > Select Page (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/LearningMaterialLinker.test.tsx`

**Purpose:** A functional block handling LearningMaterialLinker logic and presentation.

### `__tests__/components/LearningMaterialViewer.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Interactive Elements (Buttons / Actions):**
- **`Retry (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`handleSubmitAnswer()}> Submit (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/LearningStreak.test.tsx`

**Purpose:** A functional block handling LearningStreak logic and presentation.

### `__tests__/components/MemberSchoolViewHeader.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

### `__tests__/components/MentorCohortView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

**Functions / Logic:**
- **`MockCohortDashboard`**: Main functional React component responsible for rendering and composing the MockCohortDashboard views and logic.
- **`MockLearnerCohortView`**: Main functional React component responsible for rendering and composing the MockLearnerCohortView views and logic.

### `__tests__/components/MobileDropdown.test.tsx`

**Purpose:** A functional block handling MobileDropdown logic and presentation.

### `__tests__/components/ModuleCompletionSound.test.tsx`

**Purpose:** A functional block handling ModuleCompletionSound logic and presentation.

### `__tests__/components/NotionIntegration.test.tsx`

**Purpose:** A functional block handling NotionIntegration logic and presentation.

**Functions / Logic:**
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.
- **`TestWrapper`**: Main functional React component responsible for rendering and composing the TestWrapper views and logic.

**Interactive Elements (Buttons / Actions):**
- **`{confirmButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`{cancelButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/PublishConfirmationDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.
- **`MockDatePicker`**: Main functional React component responsible for rendering and composing the MockDatePicker views and logic.

**Interactive Elements (Buttons / Actions):**
- **`{confirmButtonText} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/QuizEditor.test.tsx`

**Purpose:** A functional block handling QuizEditor logic and presentation.

**Functions / Logic:**
- **`MockBlockNoteEditor`**: Main functional React component responsible for rendering and composing the MockBlockNoteEditor views and logic.
- **`MockConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockConfirmationDialog views and logic.
- **`MockDropdown`**: Main functional React component responsible for rendering and composing the MockDropdown views and logic.
- **`MockLearnerQuizView`**: Main functional React component responsible for rendering and composing the MockLearnerQuizView views and logic.
- **`MockLearningMaterialLinker`**: Main functional React component responsible for rendering and composing the MockLearningMaterialLinker views and logic.
- **`MockNotionIntegration`**: Main functional React component responsible for rendering and composing the MockNotionIntegration views and logic.
- **`MockPublishConfirmationDialog`**: Main functional React component responsible for rendering and composing the MockPublishConfirmationDialog views and logic.
- **`MockScorecard`**: Main functional React component responsible for rendering and composing the MockScorecard views and logic.
- **`MockScorecardPickerDialog`**: Main functional React component responsible for rendering and composing the MockScorecardPickerDialog views and logic.
- **`MockScorecardWithCriteriaChange`**: Main functional React component responsible for rendering and composing the MockScorecardWithCriteriaChange views and logic.
- **`MockScorecardWithDuplication`**: Main functional React component responsible for rendering and composing the MockScorecardWithDuplication views and logic.
- **`MockScorecardWithNameChange`**: Main functional React component responsible for rendering and composing the MockScorecardWithNameChange views and logic.
- **`MockToast`**: Main functional React component responsible for rendering and composing the MockToast views and logic.
- **`MockTooltip`**: Main functional React component responsible for rendering and composing the MockTooltip views and logic.
- **`setupWithQuestion`**: Updates or mutates the internal state for setupWithQuestion.

**Major Sections:**
- **Div: scorecard**: Structural container defining a discrete area of the layout.
- **Div: scorecard-picker-dialog**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`Close (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Confirm (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Save (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onPageSelect && onPageSelect('page-123', 'Test Page')}> Select Page (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onChange && onChange([{ name: 'test', description: 'test desc', minScore: 1, maxScore: 5, passScore: 3 }])} > Change Criteria (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onPageRemove && onPageRemove()}> Remove Page (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onMaterialsChange && onMaterialsChange(['material-1'])} > Link Material (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onChange && onChange([{ type: 'paragraph', content: [{ type: 'text', text: 'test content' }] }])} > Trigger Change (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onConfirm && onConfirm()}>Confirm (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onSelectTemplate && onSelectTemplate({ id: 'template-1', name: 'Template Scorecard', is_template: true, criteria: [ { name: 'Criterion 1', descript...`**: Triggers component state transitions or API events associated with the action handler.
- **`Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Create New (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onQuestionChange && onQuestionChange(q.id)} > Question {index + 1} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Delete (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/SchoolPickerDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

### `__tests__/components/Scorecard.test.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`TestComponent`**: Main functional React component responsible for rendering and composing the TestComponent views and logic.
- **`TestComponentWithRef`**: Main functional React component responsible for rendering and composing the TestComponentWithRef views and logic.
- **`discardChangesWithRef`**: Utility function to process 'discardChangesWithRef' logic within the component context.
- **`focusNameWithRef`**: Utility function to process 'focusNameWithRef' logic within the component context.
- **`handleDeleteCriterion`**: Event handler triggered to execute the DeleteCriterion related UI/state action.

**Interactive Elements (Buttons / Actions):**
- **`scorecardRef.current?.discardChanges()}> Discard (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Close (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Discard Changes (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Focus Name (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/ScorecardManager.test.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`MockPicker`**: Main functional React component responsible for rendering and composing the MockPicker views and logic.
- **`MockScorecard`**: Main functional React component responsible for rendering and composing the MockScorecard views and logic.

**Interactive Elements (Buttons / Actions):**
- **`props.onCancel?.()}>Cancel (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onCreateNew?.()}>Create New (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onRevert?.()}>Revert (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onSave?.()}>Save (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onNameChange?.('New Name')}>Name (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onDuplicate?.()}>Duplicate (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onChange?.([{ name: 'n', description: 'd', minScore: 1, maxScore: 5, passScore: 3 }])}>Criteria (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onDelete?.()}>Delete (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`onSelectTemplate?.({ id: 'tpl1', name: 'Template', is_template: true, new: false, criteria: [{ name: '', description: '', minScore: 1, maxScore: 5,...`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onClose?.()}>Close (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`props.onConfirm?.()}>Confirm (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/ScorecardPickerDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

### `__tests__/components/ScorecardView.test.tsx`

**Purpose:** Serves as the main visual presentation page, fetching necessary data and passing down props.

### `__tests__/components/SettingsDialog.test.tsx`

**Purpose:** Renders an overlay dialog/modal to prompt the user for specific input/actions.

**Functions / Logic:**
- **`MockTooltip`**: Main functional React component responsible for rendering and composing the MockTooltip views and logic.

### `__tests__/components/SimpleTooltip.test.tsx`

**Purpose:** A functional block handling SimpleTooltip logic and presentation.

**Interactive Elements (Buttons / Actions):**
- **`Click me (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/SuccessSound.test.tsx`

**Purpose:** A functional block handling SuccessSound logic and presentation.

### `__tests__/components/TaskTypeMetricCard.test.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

### `__tests__/components/Toast.test.tsx`

**Purpose:** A functional block handling Toast logic and presentation.

### `__tests__/components/Tooltip.test.tsx`

**Purpose:** A functional block handling Tooltip logic and presentation.

**Interactive Elements (Buttons / Actions):**
- **`Hover Me (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/TopPerformers.test.tsx`

**Purpose:** A functional block handling TopPerformers logic and presentation.

**Functions / Logic:**
- **`MockImage`**: Main functional React component responsible for rendering and composing the MockImage views and logic.

### `__tests__/components/UnauthorizedError.test.tsx`

**Purpose:** A functional block handling UnauthorizedError logic and presentation.

### `__tests__/components/UploadAssignmentFile.test.tsx`

**Purpose:** A functional block handling UploadAssignmentFile logic and presentation.

**Functions / Logic:**
- **`createFile`**: Utility function to process 'createFile' logic within the component context.

### `__tests__/components/UploadFile.test.tsx`

**Purpose:** A functional block handling UploadFile logic and presentation.

**Functions / Logic:**
- **`createFile`**: Utility function to process 'createFile' logic within the component context.

### `__tests__/components/dropdownOptions.test.ts`

**Purpose:** A functional block handling dropdownOptions logic and presentation.

### `__tests__/components/layout/header.test.tsx`

**Purpose:** A functional block handling header logic and presentation.

**Functions / Logic:**
- **`MockImage`**: Main functional React component responsible for rendering and composing the MockImage views and logic.

### `__tests__/components/ui/avatar.test.tsx`

**Purpose:** A functional block handling avatar logic and presentation.

### `__tests__/components/ui/button.test.tsx`

**Purpose:** A functional block handling button logic and presentation.

**Interactive Elements (Buttons / Actions):**
- **`Test (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Test {index} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Link (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Disabled (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Click me (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Small (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Focusable (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Icon (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Regular Button (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Destructive (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Outline (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Secondary (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Large (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Default (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Disabled Button (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Ref Test (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Ghost (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Link Button (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Submit (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Test Button (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Focus Test (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/ui/card.test.tsx`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Interactive Elements (Buttons / Actions):**
- **`Action (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Action Button (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/components/ui/tabs.test.tsx`

**Purpose:** A functional block handling tabs logic and presentation.

**Interactive Elements (Buttons / Actions):**
- **`{children} (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/context/IntegrationContext.test.tsx`

**Purpose:** A functional block handling IntegrationContext logic and presentation.

**Functions / Logic:**
- **`TestComponent`**: Main functional React component responsible for rendering and composing the TestComponent views and logic.

**Major Sections:**
- **Div: no-pages-found**: Structural container defining a discrete area of the layout.
- **Div: pages-count**: Structural container defining a discrete area of the layout.

**Interactive Elements (Buttons / Actions):**
- **`Disconnect Integration (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`context.setError('test error')} data-testid="set-error"> Set Error (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Check Integration (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`context.setShowDropdown(true)} data-testid="show-dropdown-btn"> Show Dropdown (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Fetch Pages (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.
- **`Connect Integration (Action: No handler)`**: Triggers component state transitions or API events associated with the action handler.

### `__tests__/lib/course.test.ts`

**Purpose:** A functional block handling course logic and presentation.

### `__tests__/lib/indexedDB.test.tsx`

**Purpose:** A functional block handling indexedDB logic and presentation.

**Functions / Logic:**
- **`setupIndexedDB`**: Updates or mutates the internal state for setupIndexedDB.

### `__tests__/lib/utils/audioUtils.test.ts`

**Purpose:** A functional block handling audioUtils logic and presentation.

**Functions / Logic:**
- **`str`**: Utility function to process 'str' logic within the component context.

### `__tests__/lib/utils/blockUtils.test.ts`

**Purpose:** A functional block handling blockUtils logic and presentation.

### `__tests__/lib/utils/dateFormat.test.ts`

**Purpose:** A functional block handling dateFormat logic and presentation.

### `__tests__/lib/utils/integrationUtils.test.ts`

**Purpose:** A functional block handling integrationUtils logic and presentation.

### `__tests__/lib/utils/scorecardValidation.test.ts`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`handler`**: Event handler triggered to execute the r related UI/state action.

### `context/EditorContext.tsx`

**Purpose:** A functional block handling EditorContext logic and presentation.

**Functions / Logic:**
- **`generateId`**: Utility function to process 'generateId' logic within the component context.
- **`useEditor`**: Utility function to process 'useEditor' logic within the component context.

### `context/IntegrationContext.tsx`

**Purpose:** A functional block handling IntegrationContext logic and presentation.

**Functions / Logic:**
- **`messageListener`**: Utility function to process 'messageListener' logic within the component context.
- **`useIntegration`**: Utility function to process 'useIntegration' logic within the component context.

### `instrumentation-client.ts`

**Purpose:** A functional block handling instrumentation-client logic and presentation.

### `instrumentation.ts`

**Purpose:** A functional block handling instrumentation logic and presentation.

**Functions / Logic:**
- **`register`**: Utility function to process 'register' logic within the component context.

### `lib/api.ts`

**Purpose:** A functional block handling api logic and presentation.

**Functions / Logic:**
- **`addModule`**: Utility function to process 'addModule' logic within the component context.
- **`getCompletionData`**: Retrieves/fetches data from the state or API regarding mpletionData.
- **`getCourseModules`**: Retrieves/fetches data from the state or API regarding urseModules.
- **`getRandomPastelColor`**: Retrieves/fetches data from the state or API regarding ndomPastelColor.
- **`useCourses`**: Utility function to process 'useCourses' logic within the component context.
- **`useSchools`**: Utility function to process 'useSchools' logic within the component context.

### `lib/auth.ts`

**Purpose:** A functional block handling auth logic and presentation.

**Functions / Logic:**
- **`useAuth`**: Utility function to process 'useAuth' logic within the component context.

### `lib/hooks/useThemePreference.ts`

**Purpose:** A functional block handling useThemePreference logic and presentation.

**Functions / Logic:**
- **`applyDarkClass`**: Utility function to process 'applyDarkClass' logic within the component context.
- **`getIsDarkMode`**: Retrieves/fetches data from the state or API regarding DarkMode.
- **`notify`**: Utility function to process 'notify' logic within the component context.
- **`useThemePreference`**: Utility function to process 'useThemePreference' logic within the component context.

### `lib/server-api.ts`

**Purpose:** A functional block handling server-api logic and presentation.

**Functions / Logic:**
- **`getPublishedCourseModules`**: Retrieves/fetches data from the state or API regarding blishedCourseModules.

### `lib/utils.ts`

**Purpose:** A functional block handling utils logic and presentation.

**Functions / Logic:**
- **`cn`**: Utility function to process 'cn' logic within the component context.

### `lib/utils/audioUtils.ts`

**Purpose:** A functional block handling audioUtils logic and presentation.

**Functions / Logic:**
- **`blobToBase64`**: Utility function to process 'blobToBase64' logic within the component context.
- **`convertAudioBufferToWav`**: Utility function to process 'convertAudioBufferToWav' logic within the component context.
- **`resampleAudio`**: Utility function to process 'resampleAudio' logic within the component context.
- **`writeString`**: Utility function to process 'writeString' logic within the component context.

### `lib/utils/blockUtils.ts`

**Purpose:** A functional block handling blockUtils logic and presentation.

**Functions / Logic:**
- **`extractTextFromBlocks`**: Utility function to process 'extractTextFromBlocks' logic within the component context.
- **`hasBlocksContent`**: Utility function to process 'hasBlocksContent' logic within the component context.

### `lib/utils/dateFormat.ts`

**Purpose:** A functional block handling dateFormat logic and presentation.

**Functions / Logic:**
- **`formatFullScheduleDate`**: Utility function to process 'formatFullScheduleDate' logic within the component context.
- **`formatScheduleDate`**: Utility function to process 'formatScheduleDate' logic within the component context.

### `lib/utils/indexedDB.ts`

**Purpose:** A functional block handling indexedDB logic and presentation.

**Functions / Logic:**
- **`deleteDraft`**: Utility function to process 'deleteDraft' logic within the component context.
- **`getDraft`**: Retrieves/fetches data from the state or API regarding aft.
- **`openIndexedDB`**: Utility function to process 'openIndexedDB' logic within the component context.
- **`setDraft`**: Updates or mutates the internal state for setDraft.

### `lib/utils/integrationUtils.ts`

**Purpose:** A functional block handling integrationUtils logic and presentation.

**Functions / Logic:**
- **`checkForNestedContent`**: Utility function to process 'checkForNestedContent' logic within the component context.
- **`compareNotionBlocks`**: Utility function to process 'compareNotionBlocks' logic within the component context.
- **`createIntegrationBlock`**: Utility function to process 'createIntegrationBlock' logic within the component context.
- **`fetchIntegrationBlocks`**: Retrieves/fetches data from the state or API regarding IntegrationBlocks.
- **`getUserIntegration`**: Retrieves/fetches data from the state or API regarding erIntegration.
- **`handleIntegrationPageRemoval`**: Event handler triggered to execute the IntegrationPageRemoval related UI/state action.
- **`handleIntegrationPageSelection`**: Event handler triggered to execute the IntegrationPageSelection related UI/state action.
- **`hasNestedPagesOrDatabases`**: Utility function to process 'hasNestedPagesOrDatabases' logic within the component context.
- **`normalizeBlocks`**: Utility function to process 'normalizeBlocks' logic within the component context.
- **`removeIdsFromRichText`**: Utility function to process 'removeIdsFromRichText' logic within the component context.

### `lib/utils/localStorage.ts`

**Purpose:** A functional block handling localStorage logic and presentation.

### `lib/utils/scorecardValidation.ts`

**Purpose:** Re-usable component to display summarized information in a specific segment.

**Functions / Logic:**
- **`validateScorecardCriteria`**: Utility function to process 'validateScorecardCriteria' logic within the component context.

### `lib/utils/urlUtils.ts`

**Purpose:** A functional block handling urlUtils logic and presentation.

**Functions / Logic:**
- **`updateTaskAndQuestionIdInUrl`**: Updates or mutates the internal state for updateTaskAndQuestionIdInUrl.

### `middleware.ts`

**Purpose:** A functional block handling middleware logic and presentation.

**Functions / Logic:**
- **`middleware`**: Utility function to process 'middleware' logic within the component context.

### `providers/SessionProvider.tsx`

**Purpose:** A functional block handling SessionProvider logic and presentation.

**Functions / Logic:**
- **`SessionProvider`**: Main functional React component responsible for rendering and composing the SessionProvider views and logic.

### `startup.py`

**Purpose:** A functional block handling startup logic and presentation.

### `types/course.ts`

**Purpose:** A functional block handling course logic and presentation.

### `types/index.ts`

**Purpose:** A functional block handling index logic and presentation.

### `types/next-auth.d.ts`

**Purpose:** A functional block handling next-auth logic and presentation.

### `types/quiz.ts`

**Purpose:** A functional block handling quiz logic and presentation.
